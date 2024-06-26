/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
} from '@solana/web3.js';

export enum MigrateArgs {
  V1,
}

export type MigrateArgsArgs = MigrateArgs;

export function getMigrateArgsEncoder(): Encoder<MigrateArgsArgs> {
  return getEnumEncoder(MigrateArgs);
}

export function getMigrateArgsDecoder(): Decoder<MigrateArgs> {
  return getEnumDecoder(MigrateArgs);
}

export function getMigrateArgsCodec(): Codec<MigrateArgsArgs, MigrateArgs> {
  return combineCodec(getMigrateArgsEncoder(), getMigrateArgsDecoder());
}
