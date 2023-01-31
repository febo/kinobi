/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  PublicKey,
  RpcAccount,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@lorisleiva/js-core';
import { TmKey, getTmKeySerializer } from '../types';

export type CollectionAuthorityRecord =
  Account<CollectionAuthorityRecordAccountData>;

export type CollectionAuthorityRecordAccountData = {
  key: TmKey;
  bump: number;
  updateAuthority: Option<PublicKey>;
};

export type CollectionAuthorityRecordAccountArgs = {
  bump: number;
  updateAuthority: Option<PublicKey>;
};

export async function fetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey
): Promise<CollectionAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(publicKey);
  assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
  return deserializeCollectionAuthorityRecord(context, maybeAccount);
}

export async function safeFetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey
): Promise<CollectionAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey);
  return maybeAccount.exists
    ? deserializeCollectionAuthorityRecord(context, maybeAccount)
    : null;
}

export async function getCollectionAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>,
  publicKey: PublicKey
) {
  const s = context.serializer;
  return gpaBuilder<{
    key: TmKey;
    bump: number;
    updateAuthority: Option<PublicKey>;
  }>(context, context.programs.get('mplTokenMetadata').address, [
    ['key', getTmKeySerializer(context)],
    ['bump', s.u8],
    ['updateAuthority', s.option(s.publicKey)],
  ]);
}

export function deserializeCollectionAuthorityRecord(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): CollectionAuthorityRecord {
  return deserializeAccount(
    rawAccount,
    getCollectionAuthorityRecordAccountDataSerializer(context)
  );
}

export function getCollectionAuthorityRecordAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CollectionAuthorityRecordAccountArgs,
  CollectionAuthorityRecordAccountData
> {
  const s = context.serializer;
  return mapSerializer<
    CollectionAuthorityRecordAccountArgs,
    CollectionAuthorityRecordAccountData,
    CollectionAuthorityRecordAccountData
  >(
    s.struct<CollectionAuthorityRecordAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['bump', s.u8],
        ['updateAuthority', s.option(s.publicKey)],
      ],
      'CollectionAuthorityRecord'
    ),
    (value) => ({ ...value, key: 9 } as CollectionAuthorityRecordAccountData)
  ) as Serializer<
    CollectionAuthorityRecordAccountArgs,
    CollectionAuthorityRecordAccountData
  >;
}

export function getCollectionAuthorityRecordSize(
  context: Pick<Context, 'serializer'>
): number | null {
  return getCollectionAuthorityRecordAccountDataSerializer(context).fixedSize;
}
