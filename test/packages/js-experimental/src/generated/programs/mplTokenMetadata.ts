/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  MplTokenMetadataProgramError,
  MplTokenMetadataProgramErrorCode,
  getMplTokenMetadataProgramErrorFromCode,
} from '../errors';
import { Program, ProgramWithErrors } from '../shared';

export const MPL_TOKEN_METADATA_PROGRAM_ADDRESS =
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

export type MplTokenMetadataProgram =
  Program<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'> &
    ProgramWithErrors<
      MplTokenMetadataProgramErrorCode,
      MplTokenMetadataProgramError
    >;

export function createMplTokenMetadataProgram(): MplTokenMetadataProgram {
  return {
    name: 'mplTokenMetadata',
    address: MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    getErrorFromCode(code: MplTokenMetadataProgramErrorCode, cause?: Error) {
      return getMplTokenMetadataProgramErrorFromCode(code, cause);
    },
  };
}
