/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getScalarEnumDecoder,
  getScalarEnumEncoder,
} from '@solana/codecs-data-structures';

export enum VerifyArgs {
  V1,
}

export type VerifyArgsArgs = VerifyArgs;

export function getVerifyArgsEncoder(): Encoder<VerifyArgsArgs> {
  return getScalarEnumEncoder<VerifyArgs>(VerifyArgs, {
    description: 'VerifyArgs',
  }) as Encoder<VerifyArgsArgs>;
}

export function getVerifyArgsDecoder(): Decoder<VerifyArgs> {
  return getScalarEnumDecoder<VerifyArgs>(VerifyArgs, {
    description: 'VerifyArgs',
  }) as Decoder<VerifyArgs>;
}

export function getVerifyArgsCodec(): Codec<VerifyArgsArgs, VerifyArgs> {
  return combineCodec(getVerifyArgsEncoder(), getVerifyArgsDecoder());
}