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

export enum TaKey {
  Uninitialized,
  Frequency,
}

export type TaKeyArgs = TaKey;

export function getTaKeyEncoder(): Encoder<TaKeyArgs> {
  return getEnumEncoder(TaKey);
}

export function getTaKeyDecoder(): Decoder<TaKey> {
  return getEnumDecoder(TaKey);
}

export function getTaKeyCodec(): Codec<TaKeyArgs, TaKey> {
  return combineCodec(getTaKeyEncoder(), getTaKeyDecoder());
}
