/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Option,
  Serializer,
} from '@metaplex-foundation/umi';
import { AssetData, AssetDataArgs, getAssetDataSerializer } from '.';

export type TmCreateArgs = {
  __kind: 'V1';
  assetData: AssetData;
  decimals: Option<number>;
  maxSupply: Option<bigint>;
};

export type TmCreateArgsArgs = {
  __kind: 'V1';
  assetData: AssetDataArgs;
  decimals: Option<number>;
  maxSupply: Option<number | bigint>;
};

export function getTmCreateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TmCreateArgsArgs, TmCreateArgs> {
  const s = context.serializer;
  return s.dataEnum<TmCreateArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<TmCreateArgs, 'V1'>>(
          [
            ['assetData', getAssetDataSerializer(context)],
            ['decimals', s.option(s.u8())],
            ['maxSupply', s.option(s.u64())],
          ],
          { description: 'V1' }
        ),
      ],
    ],
    { description: 'TmCreateArgs' }
  ) as Serializer<TmCreateArgsArgs, TmCreateArgs>;
}

// Data Enum Helpers.
export function tmCreateArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<TmCreateArgsArgs, 'V1'>
): GetDataEnumKind<TmCreateArgsArgs, 'V1'>;
export function tmCreateArgs<K extends TmCreateArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<TmCreateArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isTmCreateArgs<K extends TmCreateArgs['__kind']>(
  kind: K,
  value: TmCreateArgs
): value is TmCreateArgs & { __kind: K } {
  return value.__kind === kind;
}
