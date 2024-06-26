import test from 'ava';
import {
  BooleanTypeNode,
  EnumStructVariantTypeNode,
  EnumTypeNode,
  Node,
  NodeSelector,
  NodeStack,
  OptionTypeNode,
  accountNode,
  booleanTypeNode,
  definedTypeLinkNode,
  definedTypeNode,
  enumEmptyVariantTypeNode,
  enumStructVariantTypeNode,
  enumTypeNode,
  errorNode,
  getNodeSelectorFunction,
  identityVisitor,
  instructionAccountNode,
  instructionArgumentNode,
  instructionNode,
  interceptVisitor,
  isNode,
  numberTypeNode,
  optionTypeNode,
  pipe,
  programNode,
  publicKeyTypeNode,
  recordNodeStackVisitor,
  rootNode,
  structFieldTypeNode,
  structTypeNode,
  visit,
} from '../../src';

// Given the following tree.
const tree = rootNode(
  programNode({
    name: 'splToken',
    publicKey: '1111',
    version: '1.0.0',
    accounts: [
      accountNode({
        name: 'token',
        data: structTypeNode([
          structFieldTypeNode({
            name: 'owner',
            type: publicKeyTypeNode(),
          }),
          structFieldTypeNode({
            name: 'mint',
            type: publicKeyTypeNode(),
          }),
          structFieldTypeNode({
            name: 'amount',
            type: numberTypeNode('u64'),
          }),
          structFieldTypeNode({
            name: 'delegatedAmount',
            type: optionTypeNode(numberTypeNode('u64'), {
              prefix: numberTypeNode('u32'),
            }),
          }),
        ]),
      }),
    ],
    instructions: [
      instructionNode({
        name: 'mintToken',
        accounts: [
          instructionAccountNode({
            name: 'token',
            isSigner: false,
            isWritable: true,
          }),
          instructionAccountNode({
            name: 'mint',
            isSigner: false,
            isWritable: true,
          }),
          instructionAccountNode({
            name: 'mintAuthority',
            isSigner: true,
            isWritable: false,
          }),
        ],
        arguments: [
          instructionArgumentNode({
            name: 'amount',
            type: numberTypeNode('u64'),
          }),
        ],
      }),
    ],
    definedTypes: [],
    errors: [
      errorNode({
        code: 0,
        name: 'invalidProgramId',
        message: 'Invalid program ID',
      }),
      errorNode({
        code: 1,
        name: 'invalidTokenOwner',
        message: 'Invalid token owner',
      }),
    ],
  }),
  [
    programNode({
      name: 'christmasProgram',
      publicKey: '2222',
      version: '1.0.0',
      accounts: [
        accountNode({
          name: 'gift',
          data: structTypeNode([
            structFieldTypeNode({
              name: 'owner',
              type: publicKeyTypeNode(),
            }),
            structFieldTypeNode({
              name: 'opened',
              type: booleanTypeNode(numberTypeNode('u64')),
            }),
            structFieldTypeNode({
              name: 'amount',
              type: numberTypeNode('u64'),
            }),
            structFieldTypeNode({
              name: 'wrappingPaper',
              type: definedTypeLinkNode('wrappingPaper'),
            }),
          ]),
        }),
      ],
      instructions: [
        instructionNode({
          name: 'openGift',
          accounts: [
            instructionAccountNode({
              name: 'gift',
              isSigner: false,
              isWritable: true,
            }),
            instructionAccountNode({
              name: 'owner',
              isSigner: true,
              isWritable: false,
            }),
          ],
          arguments: [],
        }),
      ],
      definedTypes: [
        definedTypeNode({
          name: 'wrappingPaper',
          type: enumTypeNode([
            enumEmptyVariantTypeNode('blue'),
            enumEmptyVariantTypeNode('red'),
            enumStructVariantTypeNode(
              'gold',
              structTypeNode([
                structFieldTypeNode({
                  name: 'owner',
                  type: publicKeyTypeNode(),
                }),
              ])
            ),
          ]),
        }),
      ],
      errors: [
        errorNode({
          code: 0,
          name: 'invalidProgramId',
          message: 'Invalid program ID',
        }),
      ],
    }),
  ]
);

const macro = test.macro({
  title(_, selector: NodeSelector) {
    return typeof selector === 'string'
      ? `it can select nodes using paths: "${selector}"`
      : 'it can select nodes using functions';
  },
  exec(t, selector: NodeSelector, expectedSelected: Node[]) {
    // Given a selector function created from the selector.
    const selectorFunction = getNodeSelectorFunction(selector);

    // And given a visitor that keeps track of selected nodes.
    const stack = new NodeStack();
    const selected = [] as Node[];
    const visitor = pipe(
      identityVisitor(),
      (v) => recordNodeStackVisitor(v, stack),
      (v) =>
        interceptVisitor(v, (node, next) => {
          if (selectorFunction(node, stack.clone())) selected.push(node);
          return next(node);
        })
    );

    // When we visit the tree.
    visit(tree, visitor);

    // Then the selected nodes are as expected.
    t.deepEqual(expectedSelected, selected);
    selected.forEach((node, index) => t.is(node, expectedSelected[index]));
  },
});

/**
 * [programNode] splToken
 *     [accountNode] token > [structTypeNode]
 *         [structFieldTypeNode] owner > [publicKeyTypeNode]
 *         [structFieldTypeNode] mint > [publicKeyTypeNode]
 *         [structFieldTypeNode] amount > [numberTypeNode] (u64)
 *         [structFieldTypeNode] delegatedAmount > [optionTypeNode] (prefix: [numberTypeNode] (u32)) > [numberTypeNode] (u64)
 *     [instructionNode] mintToken
 *         [instructionAccountNode] token
 *         [instructionAccountNode] mint
 *         [instructionAccountNode] mintAuthority
 *         [instructionArgumentNode] amount
 *             [numberTypeNode] (u64)
 *     [errorNode] invalidProgramId (0)
 *     [errorNode] invalidTokenOwner (1)
 * [programNode] christmasProgram
 *     [accountNode] gift > [structTypeNode]
 *         [structFieldTypeNode] owner > [publicKeyTypeNode]
 *         [structFieldTypeNode] opened > [booleanTypeNode] > [numberTypeNode] (u64)
 *         [structFieldTypeNode] amount > [numberTypeNode] (u64)
 *         [structFieldTypeNode] wrappingPaper > [definedTypeLinkNode] wrappingPaper
 *     [instructionNode] openGift
 *         [instructionAccountNode] gift
 *         [instructionAccountNode] owner
 *     [definedTypeNode] wrappingPaper > [enumTypeNode]
 *         [enumEmptyVariantTypeNode] blue
 *         [enumEmptyVariantTypeNode] red
 *         [enumStructVariantTypeNode] gold > [structTypeNode]
 *             [structFieldTypeNode] owner > [publicKeyTypeNode]
 *     [errorNode] invalidProgramId (0)
 */

const splTokenProgram = tree.program;
const christmasProgram = tree.additionalPrograms[0];
const tokenAccount = splTokenProgram.accounts[0];
const tokenDelegatedAmountOption = tokenAccount.data.fields[3].type;
const mintTokenInstruction = splTokenProgram.instructions[0];
const giftAccount = christmasProgram.accounts[0];
const openGiftInstruction = christmasProgram.instructions[0];
const wrappingPaper = christmasProgram.definedTypes[0];
const wrappingPaperEnum = wrappingPaper.type;
const wrappingPaperEnumGold = wrappingPaperEnum.variants[2];

// Select programs.
test(macro, '[programNode]', [splTokenProgram, christmasProgram]);
test(macro, '[programNode]splToken', [splTokenProgram]);
test(macro, 'christmasProgram', [christmasProgram]);

// Select and filter owner nodes.
test(macro, 'owner', [
  tokenAccount.data.fields[0],
  giftAccount.data.fields[0],
  openGiftInstruction.accounts[1],
  wrappingPaperEnumGold.struct.fields[0],
]);
test(macro, '[structFieldTypeNode]owner', [
  tokenAccount.data.fields[0],
  giftAccount.data.fields[0],
  wrappingPaperEnumGold.struct.fields[0],
]);
test(macro, 'splToken.owner', [tokenAccount.data.fields[0]]);
test(macro, '[instructionNode].owner', [openGiftInstruction.accounts[1]]);
test(macro, '[accountNode].owner', [
  tokenAccount.data.fields[0],
  giftAccount.data.fields[0],
]);
test(macro, '[accountNode]token.owner', [tokenAccount.data.fields[0]]);
test(macro, 'christmasProgram.[accountNode].owner', [
  giftAccount.data.fields[0],
]);
test(
  macro,
  '[programNode]christmasProgram.[definedTypeNode]wrappingPaper.[enumStructVariantTypeNode]gold.owner',
  [wrappingPaperEnumGold.struct.fields[0]]
);
test(macro, 'christmasProgram.wrappingPaper.gold.owner', [
  wrappingPaperEnumGold.struct.fields[0],
]);

// Select all descendants of a node.
test(macro, 'wrappingPaper.*', [
  giftAccount.data.fields[3].type,
  wrappingPaperEnum,
  wrappingPaperEnum.variants[0],
  wrappingPaperEnum.variants[1],
  wrappingPaperEnum.variants[2],
  wrappingPaperEnumGold.struct,
  wrappingPaperEnumGold.struct.fields[0],
  wrappingPaperEnumGold.struct.fields[0].type,
]);
test(macro, 'wrappingPaper.[structFieldTypeNode]', [
  wrappingPaperEnumGold.struct.fields[0],
]);
test(macro, 'wrappingPaper.blue', [wrappingPaperEnum.variants[0]]);
test(macro, 'amount.*', [
  tokenAccount.data.fields[2].type,
  mintTokenInstruction.arguments[0].type,
  giftAccount.data.fields[2].type,
]);
test(macro, '[instructionNode].amount.*', [
  mintTokenInstruction.arguments[0].type,
]);
test(macro, '[structFieldTypeNode].*', [
  tokenAccount.data.fields[0].type,
  tokenAccount.data.fields[1].type,
  tokenAccount.data.fields[2].type,
  tokenAccount.data.fields[3].type,
  tokenDelegatedAmountOption.prefix,
  tokenDelegatedAmountOption.item,
  giftAccount.data.fields[0].type,
  giftAccount.data.fields[1].type,
  giftAccount.data.fields[1].type.size,
  giftAccount.data.fields[2].type,
  giftAccount.data.fields[3].type,
  wrappingPaperEnumGold.struct.fields[0].type,
]);
test(macro, '[structFieldTypeNode].*.*', [
  tokenDelegatedAmountOption.prefix,
  tokenDelegatedAmountOption.item,
  giftAccount.data.fields[1].type.size,
]);

// Select multiple node kinds.
test(macro, '[accountNode]gift.[publicKeyTypeNode|booleanTypeNode]', [
  giftAccount.data.fields[0].type,
  giftAccount.data.fields[1].type,
]);

// Select using functions.
test(macro, (node) => isNode(node, 'numberTypeNode') && node.format === 'u32', [
  tokenDelegatedAmountOption.prefix,
]);
