/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type BurnEditionNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPrintEditionMint extends string | IAccountMeta<string> = string,
  TAccountMasterEditionMint extends string | IAccountMeta<string> = string,
  TAccountPrintEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountPrintEditionAccount extends string | IAccountMeta<string> = string,
  TAccountEditionMarkerAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountPrintEditionMint extends string
        ? WritableAccount<TAccountPrintEditionMint>
        : TAccountPrintEditionMint,
      TAccountMasterEditionMint extends string
        ? ReadonlyAccount<TAccountMasterEditionMint>
        : TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount extends string
        ? WritableAccount<TAccountPrintEditionTokenAccount>
        : TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount extends string
        ? ReadonlyAccount<TAccountMasterEditionTokenAccount>
        : TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountPrintEditionAccount extends string
        ? WritableAccount<TAccountPrintEditionAccount>
        : TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount extends string
        ? WritableAccount<TAccountEditionMarkerAccount>
        : TAccountEditionMarkerAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      ...TRemainingAccounts
    ]
  >;

export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionDataArgs = {};

export function getBurnEditionNftInstructionDataEncoder(): Encoder<BurnEditionNftInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'BurnEditionNftInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 37 })
  ) as Encoder<BurnEditionNftInstructionDataArgs>;
}

export function getBurnEditionNftInstructionDataDecoder(): Decoder<BurnEditionNftInstructionData> {
  return getStructDecoder<BurnEditionNftInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'BurnEditionNftInstructionData' }
  ) as Decoder<BurnEditionNftInstructionData>;
}

export function getBurnEditionNftInstructionDataCodec(): Codec<
  BurnEditionNftInstructionDataArgs,
  BurnEditionNftInstructionData
> {
  return combineCodec(
    getBurnEditionNftInstructionDataEncoder(),
    getBurnEditionNftInstructionDataDecoder()
  );
}

export function burnEditionNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPrintEditionMint extends string | IAccountMeta<string> = string,
  TAccountMasterEditionMint extends string | IAccountMeta<string> = string,
  TAccountPrintEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountPrintEditionAccount extends string | IAccountMeta<string> = string,
  TAccountEditionMarkerAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
    printEditionMint: TAccountPrintEditionMint extends string
      ? Base58EncodedAddress<TAccountPrintEditionMint>
      : TAccountPrintEditionMint;
    masterEditionMint: TAccountMasterEditionMint extends string
      ? Base58EncodedAddress<TAccountMasterEditionMint>
      : TAccountMasterEditionMint;
    printEditionTokenAccount: TAccountPrintEditionTokenAccount extends string
      ? Base58EncodedAddress<TAccountPrintEditionTokenAccount>
      : TAccountPrintEditionTokenAccount;
    masterEditionTokenAccount: TAccountMasterEditionTokenAccount extends string
      ? Base58EncodedAddress<TAccountMasterEditionTokenAccount>
      : TAccountMasterEditionTokenAccount;
    masterEditionAccount: TAccountMasterEditionAccount extends string
      ? Base58EncodedAddress<TAccountMasterEditionAccount>
      : TAccountMasterEditionAccount;
    printEditionAccount: TAccountPrintEditionAccount extends string
      ? Base58EncodedAddress<TAccountPrintEditionAccount>
      : TAccountPrintEditionAccount;
    editionMarkerAccount: TAccountEditionMarkerAccount extends string
      ? Base58EncodedAddress<TAccountEditionMarkerAccount>
      : TAccountEditionMarkerAccount;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.printEditionMint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.masterEditionMint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.printEditionTokenAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.masterEditionTokenAccount,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.masterEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.printEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.editionMarkerAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getBurnEditionNftInstructionDataEncoder().encode({}),
    programAddress,
  } as BurnEditionNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram,
    TRemainingAccounts
  >;
}

// Input.
export type BurnEditionNftInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** NFT owner */
  owner: Signer<TAccountOwner>;
  /** Mint of the print edition NFT */
  printEditionMint: Base58EncodedAddress<TAccountPrintEditionMint>;
  /** Mint of the original/master NFT */
  masterEditionMint: Base58EncodedAddress<TAccountMasterEditionMint>;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: Base58EncodedAddress<TAccountPrintEditionTokenAccount>;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: Base58EncodedAddress<TAccountMasterEditionTokenAccount>;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: Base58EncodedAddress<TAccountMasterEditionAccount>;
  /** Print Edition account of the NFT */
  printEditionAccount: Base58EncodedAddress<TAccountPrintEditionAccount>;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: Base58EncodedAddress<TAccountEditionMarkerAccount>;
  /** SPL Token Program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
};

export async function burnEditionNft<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      BurnEditionNftInstruction<
        TProgram,
        TAccountMetadata,
        TAccountOwner,
        TAccountPrintEditionMint,
        TAccountMasterEditionMint,
        TAccountPrintEditionTokenAccount,
        TAccountMasterEditionTokenAccount,
        TAccountMasterEditionAccount,
        TAccountPrintEditionAccount,
        TAccountEditionMarkerAccount,
        TAccountSplTokenProgram
      >,
      TReturn
    >,
  input: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): Promise<TReturn>;
export async function burnEditionNft<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): Promise<
  WrappedInstruction<
    BurnEditionNftInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountPrintEditionMint,
      TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount,
      TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount,
      TAccountSplTokenProgram
    >
  >
>;
export async function burnEditionNft<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): Promise<
  WrappedInstruction<
    BurnEditionNftInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountPrintEditionMint,
      TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount,
      TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount,
      TAccountSplTokenProgram
    >
  >
>;
export async function burnEditionNft<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | BurnEditionNftInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountPrintEditionMint,
        TAccountMasterEditionMint,
        TAccountPrintEditionTokenAccount,
        TAccountMasterEditionTokenAccount,
        TAccountMasterEditionAccount,
        TAccountPrintEditionAccount,
        TAccountEditionMarkerAccount,
        TAccountSplTokenProgram
      >,
  rawInput?: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof burnEditionNftInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountPrintEditionMint,
      TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount,
      TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount,
      TAccountSplTokenProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    printEditionMint: {
      value: input.printEditionMint ?? null,
      isWritable: true,
    },
    masterEditionMint: {
      value: input.masterEditionMint ?? null,
      isWritable: false,
    },
    printEditionTokenAccount: {
      value: input.printEditionTokenAccount ?? null,
      isWritable: true,
    },
    masterEditionTokenAccount: {
      value: input.masterEditionTokenAccount ?? null,
      isWritable: false,
    },
    masterEditionAccount: {
      value: input.masterEditionAccount ?? null,
      isWritable: true,
    },
    printEditionAccount: {
      value: input.printEditionAccount ?? null,
      isWritable: true,
    },
    editionMarkerAccount: {
      value: input.editionMarkerAccount ?? null,
      isWritable: true,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
  };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.splTokenProgram.isWritable = false;
  }

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Wrapped instruction.
  const wrappedInstruction = {
    instruction: burnEditionNftInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    signers,
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(wrappedInstruction)
    : wrappedInstruction;
}