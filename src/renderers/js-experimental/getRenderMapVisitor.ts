import { format as formatCodeUsingPrettier } from '@prettier/sync';
import type { ConfigureOptions } from 'nunjucks';
import { Options as PrettierOptions } from 'prettier';
import {
  getAllAccounts,
  getAllDefinedTypes,
  getAllInstructionsWithSubs,
  getAllPdas,
  getAllPrograms,
  InstructionNode,
  ProgramNode,
  structTypeNodeFromInstructionArgumentNodes,
} from '../../nodes';
import {
  camelCase,
  ImportFrom,
  LinkableDictionary,
  logWarn,
  mainCase,
  MainCaseString,
  pipe,
  RenderMap,
  resolveTemplate,
} from '../../shared';
import {
  extendVisitor,
  getResolvedInstructionInputsVisitor,
  recordLinkablesVisitor,
  staticVisitor,
  visit,
} from '../../visitors';
import {
  CustomDataOptions,
  getDefinedTypeNodesToExtract,
  parseCustomDataOptions,
  ParsedCustomDataOptions,
} from './customDataHelpers';
import {
  getAccountFetchHelpersFragment,
  getAccountPdaHelpersFragment,
  getAccountSizeHelpersFragment,
  getAccountTypeFragment,
  getInstructionDataFragment,
  getInstructionExtraArgsFragment,
  getInstructionFunctionFragment,
  getInstructionParseFunctionFragment,
  getInstructionTypeFragment,
  getPdaFunctionFragment,
  getProgramAccountsFragment,
  getProgramErrorsFragment,
  getProgramFragment,
  getProgramInstructionsFragment,
  getTypeDiscriminatedUnionHelpersFragment,
  getTypeWithCodecFragment,
} from './fragments';
import {
  getTypeManifestVisitor as baseGetTypeManifestVisitor,
  TypeManifestVisitor,
} from './getTypeManifestVisitor';
import { ImportMap } from './ImportMap';
import {
  DEFAULT_NAME_TRANSFORMERS,
  getNameApi,
  NameApi,
  NameTransformers,
} from './nameTransformers';

const DEFAULT_PRETTIER_OPTIONS: PrettierOptions = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  arrowParens: 'always',
  printWidth: 80,
  parser: 'typescript',
};

export type GetRenderMapOptions = {
  renderParentInstructions?: boolean;
  formatCode?: boolean;
  prettierOptions?: PrettierOptions;
  dependencyMap?: Record<ImportFrom, string>;
  useGranularImports?: boolean;
  asyncResolvers?: string[];
  nameTransformers?: Partial<NameTransformers>;
  nonScalarEnums?: string[];
  internalNodes?: string[];
  customAccountData?: CustomDataOptions[];
  customInstructionData?: CustomDataOptions[];
};

export type GlobalFragmentScope = {
  nameApi: NameApi;
  linkables: LinkableDictionary;
  typeManifestVisitor: TypeManifestVisitor;
  asyncResolvers: MainCaseString[];
  nonScalarEnums: MainCaseString[];
  renderParentInstructions: boolean;
  customAccountData: ParsedCustomDataOptions;
  customInstructionData: ParsedCustomDataOptions;
};

export function getRenderMapVisitor(options: GetRenderMapOptions = {}) {
  const linkables = new LinkableDictionary();
  let program: ProgramNode | null = null;

  const nameTransformers = {
    ...DEFAULT_NAME_TRANSFORMERS,
    ...options.nameTransformers,
  };
  const nameApi = getNameApi(nameTransformers);
  const renderParentInstructions = options.renderParentInstructions ?? false;
  const formatCode = options.formatCode ?? true;
  const prettierOptions = {
    ...DEFAULT_PRETTIER_OPTIONS,
    ...options.prettierOptions,
  };
  const dependencyMap = options.dependencyMap ?? {};
  const useGranularImports = options.useGranularImports ?? false;
  const asyncResolvers = (options.asyncResolvers ?? []).map(mainCase);
  const nonScalarEnums = (options.nonScalarEnums ?? []).map(mainCase);
  const internalNodes = (options.internalNodes ?? []).map(mainCase);
  const customAccountData = parseCustomDataOptions(
    options.customAccountData ?? [],
    'AccountData'
  );
  const customInstructionData = parseCustomDataOptions(
    options.customInstructionData ?? [],
    'InstructionData'
  );

  const getTypeManifestVisitor = (parentName?: {
    strict: string;
    loose: string;
  }) =>
    baseGetTypeManifestVisitor({
      nameApi,
      linkables,
      nonScalarEnums,
      customAccountData,
      customInstructionData,
      parentName,
    });
  const typeManifestVisitor = getTypeManifestVisitor();
  const resolvedInstructionInputVisitor = getResolvedInstructionInputsVisitor();

  const globalScope: GlobalFragmentScope = {
    nameApi,
    linkables,
    typeManifestVisitor,
    asyncResolvers,
    nonScalarEnums,
    renderParentInstructions,
    customAccountData,
    customInstructionData,
  };

  const render = (
    template: string,
    context?: object,
    renderOptions?: ConfigureOptions
  ): string => {
    const code = resolveTemplate(
      `${__dirname}/templates`,
      template,
      context,
      renderOptions
    );
    return formatCode ? formatCodeUsingPrettier(code, prettierOptions) : code;
  };

  return pipe(
    staticVisitor(
      () => new RenderMap(),
      [
        'rootNode',
        'programNode',
        'pdaNode',
        'accountNode',
        'definedTypeNode',
        'instructionNode',
      ]
    ),
    (v) =>
      extendVisitor(v, {
        visitRoot(node, { self }) {
          const isNotInternal = (n: { name: MainCaseString }) =>
            !internalNodes.includes(n.name);
          const programsToExport = getAllPrograms(node).filter(isNotInternal);
          const programsWithErrorsToExport = programsToExport.filter(
            (p) => p.errors.length > 0
          );
          const pdasToExport = getAllPdas(node);
          const accountsToExport = getAllAccounts(node).filter(isNotInternal);
          const instructionsToExport = getAllInstructionsWithSubs(node, {
            leavesOnly: !renderParentInstructions,
          }).filter(isNotInternal);
          const definedTypesToExport =
            getAllDefinedTypes(node).filter(isNotInternal);
          const hasAnythingToExport =
            programsToExport.length > 0 ||
            accountsToExport.length > 0 ||
            instructionsToExport.length > 0 ||
            definedTypesToExport.length > 0;

          const ctx = {
            root: node,
            programsToExport,
            programsWithErrorsToExport,
            pdasToExport,
            accountsToExport,
            instructionsToExport,
            definedTypesToExport,
            hasAnythingToExport,
          };

          const map = new RenderMap();
          if (hasAnythingToExport) {
            map.add(
              'shared/index.ts',
              render('sharedPage.njk', {
                ...ctx,
                imports: new ImportMap()
                  .add('solanaAddresses', [
                    'Address',
                    'isProgramDerivedAddress',
                    'ProgramDerivedAddress',
                  ])
                  .add('solanaInstructions', [
                    'AccountRole',
                    'IAccountMeta',
                    'upgradeRoleToSigner',
                  ])
                  .add('solanaSigners', [
                    'IAccountSignerMeta',
                    'isTransactionSigner',
                    'TransactionSigner',
                  ])
                  .addAlias(
                    'solanaSigners',
                    'isTransactionSigner',
                    'web3JsIsTransactionSigner'
                  )
                  .toString(dependencyMap, useGranularImports),
              })
            );
          }
          if (programsToExport.length > 0) {
            map.add('programs/index.ts', render('programsIndex.njk', ctx));
          }
          if (programsWithErrorsToExport.length > 0) {
            map.add('errors/index.ts', render('errorsIndex.njk', ctx));
          }
          if (accountsToExport.length > 0) {
            map.add('accounts/index.ts', render('accountsIndex.njk', ctx));
          }
          if (pdasToExport.length > 0) {
            map.add('pdas/index.ts', render('pdasIndex.njk', ctx));
          }
          if (instructionsToExport.length > 0) {
            map.add(
              'instructions/index.ts',
              render('instructionsIndex.njk', ctx)
            );
          }
          if (definedTypesToExport.length > 0) {
            map.add('types/index.ts', render('definedTypesIndex.njk', ctx));
          }

          return map
            .add('index.ts', render('rootIndex.njk', ctx))
            .add('global.d.ts', render('globalTypesPage.njk', ctx))
            .mergeWith(...getAllPrograms(node).map((p) => visit(p, self)));
        },

        visitProgram(node, { self }) {
          program = node;
          const customDataDefinedType = [
            ...getDefinedTypeNodesToExtract(node.accounts, customAccountData),
            ...getDefinedTypeNodesToExtract(
              node.instructions,
              customInstructionData
            ),
          ];
          const scope = { ...globalScope, programNode: node };
          const renderMap = new RenderMap()
            .mergeWith(...node.pdas.map((p) => visit(p, self)))
            .mergeWith(...node.accounts.map((a) => visit(a, self)))
            .mergeWith(...node.definedTypes.map((t) => visit(t, self)))
            .mergeWith(...customDataDefinedType.map((t) => visit(t, self)));

          if (node.errors.length > 0) {
            const programErrorsFragment = getProgramErrorsFragment(scope);
            renderMap.add(
              `errors/${camelCase(node.name)}.ts`,
              render('errorsPage.njk', {
                imports: new ImportMap()
                  .mergeWith(programErrorsFragment)
                  .toString(dependencyMap, useGranularImports),
                programErrorsFragment,
              })
            );
          }

          const programFragment = getProgramFragment(scope);
          const programAccountsFragment = getProgramAccountsFragment(scope);
          const programInstructionsFragment =
            getProgramInstructionsFragment(scope);
          renderMap.add(
            `programs/${camelCase(node.name)}.ts`,
            render('programsPage.njk', {
              imports: new ImportMap()
                .mergeWith(
                  programFragment,
                  programAccountsFragment,
                  programInstructionsFragment
                )
                .toString(dependencyMap, useGranularImports),
              programFragment,
              programAccountsFragment,
              programInstructionsFragment,
            })
          );

          renderMap.mergeWith(
            ...getAllInstructionsWithSubs(program, {
              leavesOnly: !renderParentInstructions,
            }).map((ix) => visit(ix, self))
          );
          program = null;
          return renderMap;
        },

        visitPda(node) {
          if (!program) {
            throw new Error('Account must be visited inside a program.');
          }

          const scope = { ...globalScope, pdaNode: node, programNode: program };
          const pdaFunctionFragment = getPdaFunctionFragment(scope);
          const imports = new ImportMap().mergeWith(pdaFunctionFragment);

          return new RenderMap().add(
            `pdas/${camelCase(node.name)}.ts`,
            render('pdasPage.njk', {
              imports: imports.toString(dependencyMap, useGranularImports),
              pdaFunctionFragment,
            })
          );
        },

        visitAccount(node) {
          if (!program) {
            throw new Error('Account must be visited inside a program.');
          }

          const scope = {
            ...globalScope,
            accountNode: node,
            programNode: program,
            typeManifest: visit(node, typeManifestVisitor),
          };

          const accountTypeFragment = getAccountTypeFragment(scope);
          const accountFetchHelpersFragment =
            getAccountFetchHelpersFragment(scope);
          const accountSizeHelpersFragment =
            getAccountSizeHelpersFragment(scope);
          const accountPdaHelpersFragment = getAccountPdaHelpersFragment(scope);
          const imports = new ImportMap().mergeWith(
            accountTypeFragment,
            accountFetchHelpersFragment,
            accountSizeHelpersFragment,
            accountPdaHelpersFragment
          );

          return new RenderMap().add(
            `accounts/${camelCase(node.name)}.ts`,
            render('accountsPage.njk', {
              imports: imports.toString(dependencyMap, useGranularImports),
              accountTypeFragment,
              accountFetchHelpersFragment,
              accountSizeHelpersFragment,
              accountPdaHelpersFragment,
            })
          );
        },

        visitInstruction(node) {
          if (!program) {
            throw new Error('Instruction must be visited inside a program.');
          }

          const instructionExtraName = nameApi.instructionExtraType(node.name);
          const scope = {
            ...globalScope,
            instructionNode: node,
            programNode: program,
            renamedArgs: getRenamedArgsMap(node),
            dataArgsManifest: visit(node, typeManifestVisitor),
            extraArgsManifest: visit(
              structTypeNodeFromInstructionArgumentNodes(
                node.extraArguments ?? []
              ),
              getTypeManifestVisitor({
                strict: nameApi.dataType(instructionExtraName),
                loose: nameApi.dataArgsType(instructionExtraName),
              })
            ),
            resolvedInputs: visit(node, resolvedInstructionInputVisitor),
          };

          // Fragments.
          const instructionTypeFragment = getInstructionTypeFragment(scope);
          const instructionDataFragment = getInstructionDataFragment(scope);
          const instructionExtraArgsFragment =
            getInstructionExtraArgsFragment(scope);
          const instructionFunctionAsyncFragment =
            getInstructionFunctionFragment({
              ...scope,
              useAsync: true,
            });
          const instructionFunctionSyncFragment =
            getInstructionFunctionFragment({
              ...scope,
              useAsync: false,
            });
          const instructionParseFunctionFragment =
            getInstructionParseFunctionFragment(scope);

          // Imports and interfaces.
          const imports = new ImportMap().mergeWith(
            instructionTypeFragment,
            instructionDataFragment,
            instructionExtraArgsFragment,
            instructionFunctionAsyncFragment,
            instructionFunctionSyncFragment,
            instructionParseFunctionFragment
          );

          return new RenderMap().add(
            `instructions/${camelCase(node.name)}.ts`,
            render('instructionsPage.njk', {
              instruction: node,
              imports: imports.toString(dependencyMap, useGranularImports),
              instructionTypeFragment,
              instructionDataFragment,
              instructionExtraArgsFragment,
              instructionFunctionAsyncFragment,
              instructionFunctionSyncFragment,
              instructionParseFunctionFragment,
            })
          );
        },

        visitDefinedType(node) {
          const scope = {
            ...globalScope,
            typeNode: node.type,
            name: node.name,
            manifest: visit(node, typeManifestVisitor),
            typeDocs: node.docs,
            encoderDocs: [],
            decoderDocs: [],
            codecDocs: [],
          };

          const typeWithCodecFragment = getTypeWithCodecFragment(scope);
          const typeDiscriminatedUnionHelpersFragment =
            getTypeDiscriminatedUnionHelpersFragment(scope);
          const imports = new ImportMap()
            .mergeWith(
              typeWithCodecFragment,
              typeDiscriminatedUnionHelpersFragment
            )
            .remove('generatedTypes', [
              nameApi.dataType(node.name),
              nameApi.dataArgsType(node.name),
              nameApi.encoderFunction(node.name),
              nameApi.decoderFunction(node.name),
              nameApi.codecFunction(node.name),
            ]);

          return new RenderMap().add(
            `types/${camelCase(node.name)}.ts`,
            render('definedTypesPage.njk', {
              imports: imports.toString({
                ...dependencyMap,
                generatedTypes: '.',
              }),
              typeWithCodecFragment,
              typeDiscriminatedUnionHelpersFragment,
            })
          );
        },
      }),
    (v) => recordLinkablesVisitor(v, linkables)
  );
}

function getRenamedArgsMap(instruction: InstructionNode): Map<string, string> {
  const argNames = [
    ...instruction.arguments.map((a) => a.name),
    ...(instruction.extraArguments ?? []).map((a) => a.name),
  ];
  const duplicateArgs = argNames.filter((e, i, a) => a.indexOf(e) !== i);
  if (duplicateArgs.length > 0) {
    throw new Error(
      `Duplicate args found: [${duplicateArgs.join(', ')}] in instruction [${
        instruction.name
      }].`
    );
  }

  const allNames = [
    ...instruction.accounts.map((account) => account.name),
    ...argNames,
  ];
  const duplicates = allNames.filter((e, i, a) => a.indexOf(e) !== i);
  if (duplicates.length === 0) return new Map();

  logWarn(
    `[JavaScriptExperimental] Accounts and args of instruction [${instruction.name}] have the following ` +
      `conflicting attributes [${duplicates.join(', ')}]. ` +
      `Thus, the arguments have been renamed to avoid conflicts in the input type.`
  );

  return new Map(
    duplicates.map((name) => [mainCase(name), mainCase(`${name}Arg`)])
  );
}
