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
  address: PublicKey
): Promise<CollectionAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
  return deserializeCollectionAuthorityRecord(context, maybeAccount);
}

export async function safeFetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<CollectionAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists
    ? deserializeCollectionAuthorityRecord(context, maybeAccount)
    : null;
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
    (value) => ({ key: 9, ...value } as CollectionAuthorityRecordAccountData)
  ) as Serializer<
    CollectionAuthorityRecordAccountArgs,
    CollectionAuthorityRecordAccountData
  >;
}

export function getCollectionAuthorityRecordSize(_context = {}): number {
  return 35;
}
