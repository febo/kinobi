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
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  combineCodec,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU64Decoder,
  getU64Encoder,
  getUnitDecoder,
  getUnitEncoder,
} from '@solana/web3.js';

export type DelegateArgs =
  | { __kind: 'CollectionV1' }
  | { __kind: 'SaleV1'; amount: bigint }
  | { __kind: 'TransferV1'; amount: bigint };

export type DelegateArgsArgs =
  | { __kind: 'CollectionV1' }
  | { __kind: 'SaleV1'; amount: number | bigint }
  | { __kind: 'TransferV1'; amount: number | bigint };

export function getDelegateArgsEncoder(): Encoder<DelegateArgsArgs> {
  return getDiscriminatedUnionEncoder(
    [
      ['CollectionV1', getUnitEncoder()],
      ['SaleV1', getStructEncoder([['amount', getU64Encoder()]])],
      ['TransferV1', getStructEncoder([['amount', getU64Encoder()]])],
    ],
    { size: getU16Encoder() }
  );
}

export function getDelegateArgsDecoder(): Decoder<DelegateArgs> {
  return getDiscriminatedUnionDecoder(
    [
      ['CollectionV1', getUnitDecoder()],
      ['SaleV1', getStructDecoder([['amount', getU64Decoder()]])],
      ['TransferV1', getStructDecoder([['amount', getU64Decoder()]])],
    ],
    { size: getU16Decoder() }
  );
}

export function getDelegateArgsCodec(): Codec<DelegateArgsArgs, DelegateArgs> {
  return combineCodec(getDelegateArgsEncoder(), getDelegateArgsDecoder());
}

// Data Enum Helpers.
export function delegateArgs(
  kind: 'CollectionV1'
): GetDiscriminatedUnionVariant<DelegateArgsArgs, '__kind', 'CollectionV1'>;
export function delegateArgs(
  kind: 'SaleV1',
  data: GetDiscriminatedUnionVariantContent<
    DelegateArgsArgs,
    '__kind',
    'SaleV1'
  >
): GetDiscriminatedUnionVariant<DelegateArgsArgs, '__kind', 'SaleV1'>;
export function delegateArgs(
  kind: 'TransferV1',
  data: GetDiscriminatedUnionVariantContent<
    DelegateArgsArgs,
    '__kind',
    'TransferV1'
  >
): GetDiscriminatedUnionVariant<DelegateArgsArgs, '__kind', 'TransferV1'>;
export function delegateArgs<K extends DelegateArgsArgs['__kind'], Data>(
  kind: K,
  data?: Data
) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isDelegateArgs<K extends DelegateArgs['__kind']>(
  kind: K,
  value: DelegateArgs
): value is DelegateArgs & { __kind: K } {
  return value.__kind === kind;
}
