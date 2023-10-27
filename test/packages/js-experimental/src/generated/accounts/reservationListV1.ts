/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import {
  ReservationListV1AccountData,
  getReservationListV1AccountDataDecoder,
} from '../../hooked';
import {
  Account,
  Context,
  EncodedAccount,
  FetchEncodedAccountOptions,
  FetchEncodedAccountsOptions,
  assertAccountExists,
  decodeAccount,
} from '../shared';

export type ReservationListV1<TAddress extends string = string> = Account<
  ReservationListV1AccountData,
  TAddress
>;

export function decodeReservationListV1<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): ReservationListV1<TAddress> {
  return decodeAccount(
    encodedAccount,
    getReservationListV1AccountDataDecoder()
  );
}

export async function fetchReservationListV1<TAddress extends string = string>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<ReservationListV1<TAddress>> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  assertAccountExists(maybeAccount);
  return decodeReservationListV1(maybeAccount);
}

export async function safeFetchReservationListV1<
  TAddress extends string = string
>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<ReservationListV1<TAddress> | null> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  return maybeAccount.exists ? decodeReservationListV1(maybeAccount) : null;
}

export async function fetchAllReservationListV1(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<ReservationListV1[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeReservationListV1(maybeAccount);
  });
}

export async function safeFetchAllReservationListV1(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<ReservationListV1[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeReservationListV1(maybeAccount as EncodedAccount)
    );
}