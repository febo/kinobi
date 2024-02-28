/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { Program, ProgramWithErrors } from '@solana/programs';
import {
  MplCandyMachineCoreProgramError,
  MplCandyMachineCoreProgramErrorCode,
  getMplCandyMachineCoreProgramErrorFromCode,
} from '../errors';
import {
  ParsedAddConfigLinesInstruction,
  ParsedDummyInstruction,
  ParsedInitializeInstruction,
  ParsedMintFromCandyMachineInstruction,
  ParsedSetAuthorityInstruction,
  ParsedSetCollectionInstruction,
  ParsedSetMintAuthorityInstruction,
  ParsedUpdateCandyMachineInstruction,
  ParsedWithdrawInstruction,
} from '../instructions';
import { memcmp } from '../shared';

export const MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS =
  'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;

export type MplCandyMachineCoreProgram =
  Program<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'> &
    ProgramWithErrors<
      MplCandyMachineCoreProgramErrorCode,
      MplCandyMachineCoreProgramError
    >;

export function getMplCandyMachineCoreProgram(): MplCandyMachineCoreProgram {
  return {
    name: 'mplCandyMachineCore',
    address: MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
    getErrorFromCode(code: MplCandyMachineCoreProgramErrorCode, cause?: Error) {
      return getMplCandyMachineCoreProgramErrorFromCode(code, cause);
    },
  };
}

export enum MplCandyMachineCoreAccount {
  CandyMachine,
}

export function identifyMplCandyMachineCoreAccount(
  account: { data: Uint8Array } | Uint8Array
): MplCandyMachineCoreAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (memcmp(data, new Uint8Array([51, 173, 177, 113, 25, 241, 109, 189]), 0)) {
    return MplCandyMachineCoreAccount.CandyMachine;
  }
  throw new Error(
    'The provided account could not be identified as a mplCandyMachineCore account.'
  );
}

export enum MplCandyMachineCoreInstruction {
  Dummy,
  AddConfigLines,
  Initialize,
  MintFromCandyMachine,
  SetAuthority,
  SetCollection,
  SetMintAuthority,
  UpdateCandyMachine,
  Withdraw,
}

export function identifyMplCandyMachineCoreInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): MplCandyMachineCoreInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (memcmp(data, new Uint8Array([167, 117, 211, 79, 251, 254, 47, 135]), 0)) {
    return MplCandyMachineCoreInstruction.Dummy;
  }
  if (memcmp(data, new Uint8Array([223, 50, 224, 227, 151, 8, 115, 106]), 0)) {
    return MplCandyMachineCoreInstruction.AddConfigLines;
  }
  if (memcmp(data, new Uint8Array([175, 175, 109, 31, 13, 152, 155, 237]), 0)) {
    return MplCandyMachineCoreInstruction.Initialize;
  }
  if (memcmp(data, new Uint8Array([51, 57, 225, 47, 182, 146, 137, 166]), 0)) {
    return MplCandyMachineCoreInstruction.MintFromCandyMachine;
  }
  if (memcmp(data, new Uint8Array([133, 250, 37, 21, 110, 163, 26, 121]), 0)) {
    return MplCandyMachineCoreInstruction.SetAuthority;
  }
  if (memcmp(data, new Uint8Array([192, 254, 206, 76, 168, 182, 59, 223]), 0)) {
    return MplCandyMachineCoreInstruction.SetCollection;
  }
  if (
    memcmp(data, new Uint8Array([67, 127, 155, 187, 100, 174, 103, 121]), 0)
  ) {
    return MplCandyMachineCoreInstruction.SetMintAuthority;
  }
  if (memcmp(data, new Uint8Array([219, 200, 88, 176, 158, 63, 253, 127]), 0)) {
    return MplCandyMachineCoreInstruction.UpdateCandyMachine;
  }
  if (memcmp(data, new Uint8Array([183, 18, 70, 156, 148, 109, 161, 34]), 0)) {
    return MplCandyMachineCoreInstruction.Withdraw;
  }
  throw new Error(
    'The provided instruction could not be identified as a mplCandyMachineCore instruction.'
  );
}

export type ParsedMplCandyMachineCoreInstruction =
  | ({
      instructionType: MplCandyMachineCoreInstruction.Dummy;
    } & ParsedDummyInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.AddConfigLines;
    } & ParsedAddConfigLinesInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.Initialize;
    } & ParsedInitializeInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.MintFromCandyMachine;
    } & ParsedMintFromCandyMachineInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.SetAuthority;
    } & ParsedSetAuthorityInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.SetCollection;
    } & ParsedSetCollectionInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.SetMintAuthority;
    } & ParsedSetMintAuthorityInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.UpdateCandyMachine;
    } & ParsedUpdateCandyMachineInstruction)
  | ({
      instructionType: MplCandyMachineCoreInstruction.Withdraw;
    } & ParsedWithdrawInstruction);
