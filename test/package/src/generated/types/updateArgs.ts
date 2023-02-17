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
  PublicKey,
  Serializer,
  mapSerializer,
  publicKey,
  some,
} from '@metaplex-foundation/umi-core';
import {
  AuthorityType,
  AuthorizationData,
  AuthorizationDataArgs,
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  ProgrammableConfig,
  TokenStandard,
  Uses,
  UsesArgs,
  getAuthorityTypeSerializer,
  getAuthorizationDataSerializer,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
  payloadType,
} from '.';

export type UpdateArgs = {
  __kind: 'V1';
  authorizationData: Option<AuthorizationData>;
  newUpdateAuthority: Option<PublicKey>;
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  }>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
  authorityType: AuthorityType;
};

export type UpdateArgsArgs = {
  __kind: 'V1';
  authorizationData: Option<AuthorizationDataArgs>;
  newUpdateAuthority: Option<PublicKey>;
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<CreatorArgs>>;
  }>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
  tokenStandard?: Option<TokenStandard>;
  collection?: Option<CollectionArgs>;
  uses: Option<UsesArgs>;
  collectionDetails: Option<CollectionDetailsArgs>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
  authorityType: AuthorityType;
};

export function getUpdateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UpdateArgsArgs, UpdateArgs> {
  const s = context.serializer;
  return s.dataEnum<UpdateArgs>(
    [
      [
        'V1',
        mapSerializer<
          GetDataEnumKindContent<UpdateArgsArgs, 'V1'>,
          GetDataEnumKindContent<UpdateArgs, 'V1'>,
          GetDataEnumKindContent<UpdateArgs, 'V1'>
        >(
          s.struct<GetDataEnumKindContent<UpdateArgs, 'V1'>>(
            [
              [
                'authorizationData',
                s.option(getAuthorizationDataSerializer(context)),
              ],
              ['newUpdateAuthority', s.option(s.publicKey)],
              [
                'data',
                s.option(
                  s.struct<any>(
                    [
                      ['name', s.string()],
                      ['symbol', s.string()],
                      ['uri', s.string()],
                      ['sellerFeeBasisPoints', s.u16],
                      [
                        'creators',
                        s.option(s.vec(getCreatorSerializer(context))),
                      ],
                    ],
                    'Data'
                  )
                ),
              ],
              ['primarySaleHappened', s.option(s.bool())],
              ['isMutable', s.option(s.bool())],
              ['tokenStandard', s.option(getTokenStandardSerializer(context))],
              ['collection', s.option(getCollectionSerializer(context))],
              ['uses', s.option(getUsesSerializer(context))],
              [
                'collectionDetails',
                s.option(getCollectionDetailsSerializer(context)),
              ],
              [
                'programmableConfig',
                s.option(getProgrammableConfigSerializer(context)),
              ],
              ['delegateState', s.option(getDelegateStateSerializer(context))],
              ['authorityType', getAuthorityTypeSerializer(context)],
            ],
            'V1'
          ),
          (value) =>
            ({
              ...value,
              tokenStandard:
                value.tokenStandard ?? some(TokenStandard.NonFungible),
              collection:
                value.collection ??
                some(
                  payloadType('Pubkey', [
                    publicKey('11111111111111111111111111111111'),
                  ])
                ),
            } as GetDataEnumKindContent<UpdateArgs, 'V1'>)
        ),
      ],
    ],
    undefined,
    'UpdateArgs'
  ) as Serializer<UpdateArgsArgs, UpdateArgs>;
}

// Data Enum Helpers.
export function updateArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<UpdateArgsArgs, 'V1'>
): GetDataEnumKind<UpdateArgsArgs, 'V1'>;
export function updateArgs<K extends UpdateArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<UpdateArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isUpdateArgs<K extends UpdateArgs['__kind']>(
  kind: K,
  value: UpdateArgs
): value is UpdateArgs & { __kind: K } {
  return value.__kind === kind;
}