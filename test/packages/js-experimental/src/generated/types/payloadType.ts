/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs';

/** This is a union of all the possible payload types. */
export type PayloadType =
  | { __kind: 'Pubkey'; fields: readonly [Address] }
  | { __kind: 'Seeds'; seeds: Array<Uint8Array> }
  | { __kind: 'MerkleProof'; leaf: Uint8Array; proof: Array<Uint8Array> }
  | { __kind: 'Number'; fields: readonly [bigint] };

export type PayloadTypeArgs =
  | { __kind: 'Pubkey'; fields: readonly [Address] }
  | { __kind: 'Seeds'; seeds: Array<Uint8Array> }
  | { __kind: 'MerkleProof'; leaf: Uint8Array; proof: Array<Uint8Array> }
  | { __kind: 'Number'; fields: readonly [number | bigint] };

export function getPayloadTypeEncoder(): Encoder<PayloadTypeArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'Pubkey',
      getStructEncoder([['fields', getTupleEncoder([getAddressEncoder()])]]),
    ],
    [
      'Seeds',
      getStructEncoder([
        ['seeds', getArrayEncoder(getBytesEncoder({ size: getU32Encoder() }))],
      ]),
    ],
    [
      'MerkleProof',
      getStructEncoder([
        ['leaf', getBytesEncoder({ size: 32 })],
        ['proof', getArrayEncoder(getBytesEncoder({ size: 32 }))],
      ]),
    ],
    [
      'Number',
      getStructEncoder([['fields', getTupleEncoder([getU64Encoder()])]]),
    ],
  ]);
}

export function getPayloadTypeDecoder(): Decoder<PayloadType> {
  return getDiscriminatedUnionDecoder([
    [
      'Pubkey',
      getStructDecoder([['fields', getTupleDecoder([getAddressDecoder()])]]),
    ],
    [
      'Seeds',
      getStructDecoder([
        ['seeds', getArrayDecoder(getBytesDecoder({ size: getU32Decoder() }))],
      ]),
    ],
    [
      'MerkleProof',
      getStructDecoder([
        ['leaf', getBytesDecoder({ size: 32 })],
        ['proof', getArrayDecoder(getBytesDecoder({ size: 32 }))],
      ]),
    ],
    [
      'Number',
      getStructDecoder([['fields', getTupleDecoder([getU64Decoder()])]]),
    ],
  ]);
}

export function getPayloadTypeCodec(): Codec<PayloadTypeArgs, PayloadType> {
  return combineCodec(getPayloadTypeEncoder(), getPayloadTypeDecoder());
}

// Data Enum Helpers.
export function payloadType(
  kind: 'Pubkey',
  data: GetDiscriminatedUnionVariantContent<
    PayloadTypeArgs,
    '__kind',
    'Pubkey'
  >['fields']
): GetDiscriminatedUnionVariant<PayloadTypeArgs, '__kind', 'Pubkey'>;
export function payloadType(
  kind: 'Seeds',
  data: GetDiscriminatedUnionVariantContent<PayloadTypeArgs, '__kind', 'Seeds'>
): GetDiscriminatedUnionVariant<PayloadTypeArgs, '__kind', 'Seeds'>;
export function payloadType(
  kind: 'MerkleProof',
  data: GetDiscriminatedUnionVariantContent<
    PayloadTypeArgs,
    '__kind',
    'MerkleProof'
  >
): GetDiscriminatedUnionVariant<PayloadTypeArgs, '__kind', 'MerkleProof'>;
export function payloadType(
  kind: 'Number',
  data: GetDiscriminatedUnionVariantContent<
    PayloadTypeArgs,
    '__kind',
    'Number'
  >['fields']
): GetDiscriminatedUnionVariant<PayloadTypeArgs, '__kind', 'Number'>;
export function payloadType<K extends PayloadTypeArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isPayloadType<K extends PayloadType['__kind']>(
  kind: K,
  value: PayloadType
): value is PayloadType & { __kind: K } {
  return value.__kind === kind;
}
