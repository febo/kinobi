/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Address,
  Codec,
  Decoder,
  EncodedAccount,
  Encoder,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  Option,
  OptionOrNullable,
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { MasterEditionV2Seeds, findMasterEditionV2Pda } from '../pdas';
import { TmKey, getTmKeyDecoder, getTmKeyEncoder } from '../types';

export type MasterEditionV2 = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
};

export type MasterEditionV2Args = {
  supply: number | bigint;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getMasterEditionV2Encoder(): Encoder<MasterEditionV2Args> {
  return transformEncoder(
    getStructEncoder([
      ['key', getTmKeyEncoder()],
      ['supply', getU64Encoder()],
      ['maxSupply', getOptionEncoder(getU64Encoder())],
    ]),
    (value) => ({ ...value, key: TmKey.MasterEditionV2 })
  );
}

export function getMasterEditionV2Decoder(): Decoder<MasterEditionV2> {
  return getStructDecoder([
    ['key', getTmKeyDecoder()],
    ['supply', getU64Decoder()],
    ['maxSupply', getOptionDecoder(getU64Decoder())],
  ]);
}

export function getMasterEditionV2Codec(): Codec<
  MasterEditionV2Args,
  MasterEditionV2
> {
  return combineCodec(getMasterEditionV2Encoder(), getMasterEditionV2Decoder());
}

export function decodeMasterEditionV2<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<MasterEditionV2, TAddress>;
export function decodeMasterEditionV2<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<MasterEditionV2, TAddress>;
export function decodeMasterEditionV2<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
):
  | Account<MasterEditionV2, TAddress>
  | MaybeAccount<MasterEditionV2, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getMasterEditionV2Decoder()
  );
}

export async function fetchMasterEditionV2<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<MasterEditionV2, TAddress>> {
  const maybeAccount = await fetchMaybeMasterEditionV2(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMasterEditionV2<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<MasterEditionV2, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeMasterEditionV2(maybeAccount);
}

export async function fetchAllMasterEditionV2(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<MasterEditionV2>[]> {
  const maybeAccounts = await fetchAllMaybeMasterEditionV2(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeMasterEditionV2(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<MasterEditionV2>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeMasterEditionV2(maybeAccount)
  );
}

export function getMasterEditionV2Size(): number {
  return 282;
}

export async function fetchMasterEditionV2FromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: MasterEditionV2Seeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<Account<MasterEditionV2>> {
  const maybeAccount = await fetchMaybeMasterEditionV2FromSeeds(
    rpc,
    seeds,
    config
  );
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMasterEditionV2FromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: MasterEditionV2Seeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<MaybeAccount<MasterEditionV2>> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findMasterEditionV2Pda(seeds, { programAddress });
  return await fetchMaybeMasterEditionV2(rpc, address, fetchConfig);
}
