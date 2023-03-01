/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Option,
  PublicKey,
  Serializer,
} from '@metaplex-foundation/umi';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  DelegateStateArgs,
  ProgrammableConfig,
  ProgrammableConfigArgs,
  TokenStandard,
  TokenStandardArgs,
  Uses,
  UsesArgs,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '.';

export type AssetData = {
  updateAuthority: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<Creator>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: TokenStandard;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export type AssetDataArgs = {
  updateAuthority: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<CreatorArgs>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: TokenStandardArgs;
  collection: Option<CollectionArgs>;
  uses: Option<UsesArgs>;
  collectionDetails: Option<CollectionDetailsArgs>;
  programmableConfig: Option<ProgrammableConfigArgs>;
  delegateState: Option<DelegateStateArgs>;
};

export function getAssetDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<AssetDataArgs, AssetData> {
  const s = context.serializer;
  return s.struct<AssetData>(
    [
      ['updateAuthority', s.publicKey()],
      ['name', s.string()],
      ['symbol', s.string()],
      ['uri', s.string()],
      ['sellerFeeBasisPoints', s.u16()],
      ['creators', s.option(s.array(getCreatorSerializer(context)))],
      ['primarySaleHappened', s.bool()],
      ['isMutable', s.bool()],
      ['editionNonce', s.option(s.u8())],
      ['tokenStandard', getTokenStandardSerializer(context)],
      ['collection', s.option(getCollectionSerializer(context))],
      ['uses', s.option(getUsesSerializer(context))],
      ['collectionDetails', s.option(getCollectionDetailsSerializer(context))],
      [
        'programmableConfig',
        s.option(getProgrammableConfigSerializer(context)),
      ],
      ['delegateState', s.option(getDelegateStateSerializer(context))],
    ],
    { description: 'AssetData' }
  ) as Serializer<AssetDataArgs, AssetData>;
}
