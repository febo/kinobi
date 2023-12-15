/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  assertAccountExists,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
import { Address } from '@solana/addresses';
import {
  ReservationListV1AccountData,
  getReservationListV1AccountDataDecoder,
} from '../../hooked';

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
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<ReservationListV1<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  assertAccountExists(maybeAccount);
  return decodeReservationListV1(maybeAccount);
}

export async function safeFetchReservationListV1<
  TAddress extends string = string
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<ReservationListV1<TAddress> | null> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return maybeAccount.exists ? decodeReservationListV1(maybeAccount) : null;
}

export async function fetchAllReservationListV1(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<ReservationListV1[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeReservationListV1(maybeAccount);
  });
}

export async function safeFetchAllReservationListV1(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<ReservationListV1[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeReservationListV1(maybeAccount as EncodedAccount)
    );
}
