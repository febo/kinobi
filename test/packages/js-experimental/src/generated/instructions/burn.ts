/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  IAccountMeta,
  IAccountSignerMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  TransactionSigner,
  WritableAccount,
  WritableSignerAccount,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  BurnArgs,
  BurnArgsArgs,
  getBurnArgsDecoder,
  getBurnArgsEncoder,
} from '../types';

export type BurnInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      ...TRemainingAccounts,
    ]
  >;

export type BurnInstructionData = { discriminator: number; burnArgs: BurnArgs };

export type BurnInstructionDataArgs = { burnArgs: BurnArgsArgs };

export function getBurnInstructionDataEncoder(): Encoder<BurnInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['burnArgs', getBurnArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 44 })
  );
}

export function getBurnInstructionDataDecoder(): Decoder<BurnInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['burnArgs', getBurnArgsDecoder()],
  ]);
}

export function getBurnInstructionDataCodec(): Codec<
  BurnInstructionDataArgs,
  BurnInstructionData
> {
  return combineCodec(
    getBurnInstructionDataEncoder(),
    getBurnInstructionDataDecoder()
  );
}

export type BurnInput<
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountMint extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMasterEditionAccount extends string = string,
  TAccountSplTokenProgram extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountAuthorizationRules extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Asset owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition of the asset */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  burnArgs: BurnInstructionDataArgs['burnArgs'];
};

export function getBurnInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
>(
  input: BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): BurnInstruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata,
  TAccountOwner,
  TAccountMint,
  TAccountTokenAccount,
  TAccountMasterEditionAccount,
  TAccountSplTokenProgram,
  TAccountCollectionMetadata,
  TAccountAuthorizationRules,
  TAccountAuthorizationRulesProgram
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    masterEditionAccount: {
      value: input.masterEditionAccount ?? null,
      isWritable: true,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.tokenAccount),
      getAccountMeta(accounts.masterEditionAccount),
      getAccountMeta(accounts.splTokenProgram),
      getAccountMeta(accounts.collectionMetadata),
      getAccountMeta(accounts.authorizationRules),
      getAccountMeta(accounts.authorizationRulesProgram),
    ],
    programAddress,
    data: getBurnInstructionDataEncoder().encode(
      args as BurnInstructionDataArgs
    ),
  } as BurnInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >;

  return instruction;
}

export type ParsedBurnInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Asset owner */
    owner: TAccountMetas[1];
    /** Mint of token asset */
    mint: TAccountMetas[2];
    /** Token account to close */
    tokenAccount: TAccountMetas[3];
    /** MasterEdition of the asset */
    masterEditionAccount: TAccountMetas[4];
    /** SPL Token Program */
    splTokenProgram: TAccountMetas[5];
    /** Metadata of the Collection */
    collectionMetadata?: TAccountMetas[6] | undefined;
    /** Token Authorization Rules account */
    authorizationRules?: TAccountMetas[7] | undefined;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: TAccountMetas[8] | undefined;
  };
  data: BurnInstructionData;
};

export function parseBurnInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedBurnInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 9) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === MPL_TOKEN_METADATA_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      owner: getNextAccount(),
      mint: getNextAccount(),
      tokenAccount: getNextAccount(),
      masterEditionAccount: getNextAccount(),
      splTokenProgram: getNextAccount(),
      collectionMetadata: getNextOptionalAccount(),
      authorizationRules: getNextOptionalAccount(),
      authorizationRulesProgram: getNextOptionalAccount(),
    },
    data: getBurnInstructionDataDecoder().decode(instruction.data),
  };
}
