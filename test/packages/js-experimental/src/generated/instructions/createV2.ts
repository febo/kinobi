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
  Option,
  OptionOrNullable,
  ReadonlyAccount,
  ReadonlySignerAccount,
  TransactionSigner,
  WritableAccount,
  WritableSignerAccount,
  combineCodec,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  AssetData,
  AssetDataArgs,
  getAssetDataDecoder,
  getAssetDataEncoder,
} from '../types';

export type CreateV2Instruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CreateV2InstructionData = {
  discriminator: number;
  createV2Discriminator: number;
  assetData: AssetData;
  maxSupply: Option<bigint>;
};

export type CreateV2InstructionDataArgs = {
  assetData: AssetDataArgs;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getCreateV2InstructionDataEncoder(): Encoder<CreateV2InstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['createV2Discriminator', getU8Encoder()],
      ['assetData', getAssetDataEncoder()],
      ['maxSupply', getOptionEncoder(getU64Encoder())],
    ]),
    (value) => ({ ...value, discriminator: 41, createV2Discriminator: 1 })
  );
}

export function getCreateV2InstructionDataDecoder(): Decoder<CreateV2InstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['createV2Discriminator', getU8Decoder()],
    ['assetData', getAssetDataDecoder()],
    ['maxSupply', getOptionDecoder(getU64Decoder())],
  ]);
}

export function getCreateV2InstructionDataCodec(): Codec<
  CreateV2InstructionDataArgs,
  CreateV2InstructionData
> {
  return combineCodec(
    getCreateV2InstructionDataEncoder(),
    getCreateV2InstructionDataDecoder()
  );
}

export type CreateV2Input<
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSysvarInstructions extends string = string,
  TAccountSplTokenProgram extends string = string,
> = {
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
  masterEdition?: Address<TAccountMasterEdition>;
  /** Mint of token asset */
  mint: Address<TAccountMint> | TransactionSigner<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** SPL Token program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  assetData: CreateV2InstructionDataArgs['assetData'];
  maxSupply: CreateV2InstructionDataArgs['maxSupply'];
};

export function getCreateV2Instruction<
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
>(
  input: CreateV2Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): CreateV2Instruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata,
  TAccountMasterEdition,
  (typeof input)['mint'] extends TransactionSigner<TAccountMint>
    ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
    : TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountSplTokenProgram
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
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
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.masterEdition),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintAuthority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.updateAuthority),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.sysvarInstructions),
      getAccountMeta(accounts.splTokenProgram),
    ],
    programAddress,
    data: getCreateV2InstructionDataEncoder().encode(
      args as CreateV2InstructionDataArgs
    ),
  } as CreateV2Instruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountMasterEdition,
    (typeof input)['mint'] extends TransactionSigner<TAccountMint>
      ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
      : TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >;

  return instruction;
}

export type ParsedCreateV2Instruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account key (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
    masterEdition?: TAccountMetas[1] | undefined;
    /** Mint of token asset */
    mint: TAccountMetas[2];
    /** Mint authority */
    mintAuthority: TAccountMetas[3];
    /** Payer */
    payer: TAccountMetas[4];
    /** update authority info */
    updateAuthority: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[7];
    /** SPL Token program */
    splTokenProgram: TAccountMetas[8];
  };
  data: CreateV2InstructionData;
};

export function parseCreateV2Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateV2Instruction<TProgram, TAccountMetas> {
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
      masterEdition: getNextOptionalAccount(),
      mint: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
      splTokenProgram: getNextAccount(),
    },
    data: getCreateV2InstructionDataDecoder().decode(instruction.data),
  };
}
