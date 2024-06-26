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
  ReadonlySignerAccount,
  TransactionSigner,
  WritableAccount,
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type SetAuthorityInstruction<
  TProgram extends string = typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: Address;
};

export type SetAuthorityInstructionDataArgs = { newAuthority: Address };

export function getSetAuthorityInstructionDataEncoder(): Encoder<SetAuthorityInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['newAuthority', getAddressEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
    })
  );
}

export function getSetAuthorityInstructionDataDecoder(): Decoder<SetAuthorityInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['newAuthority', getAddressDecoder()],
  ]);
}

export function getSetAuthorityInstructionDataCodec(): Codec<
  SetAuthorityInstructionDataArgs,
  SetAuthorityInstructionData
> {
  return combineCodec(
    getSetAuthorityInstructionDataEncoder(),
    getSetAuthorityInstructionDataDecoder()
  );
}

export type SetAuthorityInput<
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority: TransactionSigner<TAccountAuthority>;
  newAuthority: SetAuthorityInstructionDataArgs['newAuthority'];
};

export function getSetAuthorityInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
>(
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): SetAuthorityInstruction<
  typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
  TAccountCandyMachine,
  TAccountAuthority
> {
  // Program address.
  const programAddress = MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.candyMachine),
      getAccountMeta(accounts.authority),
    ],
    programAddress,
    data: getSetAuthorityInstructionDataEncoder().encode(
      args as SetAuthorityInstructionDataArgs
    ),
  } as SetAuthorityInstruction<
    typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
    TAccountCandyMachine,
    TAccountAuthority
  >;

  return instruction;
}

export type ParsedSetAuthorityInstruction<
  TProgram extends string = typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    candyMachine: TAccountMetas[0];
    authority: TAccountMetas[1];
  };
  data: SetAuthorityInstructionData;
};

export function parseSetAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetAuthorityInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      candyMachine: getNextAccount(),
      authority: getNextAccount(),
    },
    data: getSetAuthorityInstructionDataDecoder().decode(instruction.data),
  };
}
