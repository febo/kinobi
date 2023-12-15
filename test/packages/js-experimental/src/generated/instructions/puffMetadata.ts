/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
  WritableAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type PuffMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      ...TRemainingAccounts
    ]
  >;

export type PuffMetadataInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      ...TRemainingAccounts
    ]
  >;

export type PuffMetadataInstructionData = { discriminator: number };

export type PuffMetadataInstructionDataArgs = {};

export function getPuffMetadataInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 14 })
  ) satisfies Encoder<PuffMetadataInstructionDataArgs>;
}

export function getPuffMetadataInstructionDataDecoder() {
  return getStructDecoder<PuffMetadataInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<PuffMetadataInstructionData>;
}

export function getPuffMetadataInstructionDataCodec(): Codec<
  PuffMetadataInstructionDataArgs,
  PuffMetadataInstructionData
> {
  return combineCodec(
    getPuffMetadataInstructionDataEncoder(),
    getPuffMetadataInstructionDataDecoder()
  );
}

export type PuffMetadataInput<TAccountMetadata extends string> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
};

export type PuffMetadataInputWithSigners<TAccountMetadata extends string> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
};

export function getPuffMetadataInstruction<
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: PuffMetadataInputWithSigners<TAccountMetadata>
): PuffMetadataInstructionWithSigners<TProgram, TAccountMetadata>;
export function getPuffMetadataInstruction<
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: PuffMetadataInput<TAccountMetadata>
): PuffMetadataInstruction<TProgram, TAccountMetadata>;
export function getPuffMetadataInstruction<
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(input: PuffMetadataInput<TAccountMetadata>): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getPuffMetadataInstructionRaw<TProgram, TAccountMetadata>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getPuffMetadataInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getPuffMetadataInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getPuffMetadataInstructionDataEncoder().encode({}),
    programAddress,
  } as PuffMetadataInstruction<TProgram, TAccountMetadata, TRemainingAccounts>;
}
