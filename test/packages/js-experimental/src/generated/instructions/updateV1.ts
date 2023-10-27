/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
  some,
} from '@solana/options';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
  getProgramAddress,
} from '../shared';
import {
  AuthorityType,
  AuthorityTypeArgs,
  AuthorizationData,
  AuthorizationDataArgs,
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
  getAuthorityTypeDecoder,
  getAuthorityTypeEncoder,
  getAuthorizationDataDecoder,
  getAuthorizationDataEncoder,
  getCollectionDecoder,
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getCollectionEncoder,
  getCreatorDecoder,
  getCreatorEncoder,
  getDelegateStateDecoder,
  getDelegateStateEncoder,
  getProgrammableConfigDecoder,
  getProgrammableConfigEncoder,
  getTokenStandardDecoder,
  getTokenStandardEncoder,
  getUsesDecoder,
  getUsesEncoder,
} from '../types';

// Output.
export type UpdateV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountToken extends string
        ? ReadonlyAccount<TAccountToken>
        : TAccountToken,
      TAccountDelegateRecord extends string
        ? ReadonlyAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      ...TRemainingAccounts
    ]
  >;

export type UpdateV1InstructionData = {
  discriminator: number;
  updateV1Discriminator: number;
  authorizationData: Option<AuthorizationData>;
  newUpdateAuthority: Option<Base58EncodedAddress>;
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

export type UpdateV1InstructionDataArgs = {
  authorizationData: OptionOrNullable<AuthorizationDataArgs>;
  newUpdateAuthority: OptionOrNullable<Base58EncodedAddress>;
  data: OptionOrNullable<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  }>;
  primarySaleHappened: OptionOrNullable<boolean>;
  isMutable: OptionOrNullable<boolean>;
  tokenStandard?: OptionOrNullable<TokenStandardArgs>;
  collection: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
  programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
  delegateState: OptionOrNullable<DelegateStateArgs>;
  authorityType: AuthorityTypeArgs;
};

export function getUpdateV1InstructionDataEncoder(): Encoder<UpdateV1InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      updateV1Discriminator: number;
      authorizationData: OptionOrNullable<AuthorizationDataArgs>;
      newUpdateAuthority: OptionOrNullable<Base58EncodedAddress>;
      data: OptionOrNullable<{
        name: string;
        symbol: string;
        uri: string;
        sellerFeeBasisPoints: number;
        creators: OptionOrNullable<Array<CreatorArgs>>;
      }>;
      primarySaleHappened: OptionOrNullable<boolean>;
      isMutable: OptionOrNullable<boolean>;
      tokenStandard: OptionOrNullable<TokenStandardArgs>;
      collection: OptionOrNullable<CollectionArgs>;
      uses: OptionOrNullable<UsesArgs>;
      collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
      programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
      delegateState: OptionOrNullable<DelegateStateArgs>;
      authorityType: AuthorityTypeArgs;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['updateV1Discriminator', getU8Encoder()],
        ['authorizationData', getOptionEncoder(getAuthorizationDataEncoder())],
        ['newUpdateAuthority', getOptionEncoder(getAddressEncoder())],
        [
          'data',
          getOptionEncoder(
            getStructEncoder<{
              name: string;
              symbol: string;
              uri: string;
              sellerFeeBasisPoints: number;
              creators: OptionOrNullable<Array<CreatorArgs>>;
            }>([
              ['name', getStringEncoder()],
              ['symbol', getStringEncoder()],
              ['uri', getStringEncoder()],
              ['sellerFeeBasisPoints', getU16Encoder()],
              [
                'creators',
                getOptionEncoder(getArrayEncoder(getCreatorEncoder())),
              ],
            ])
          ),
        ],
        ['primarySaleHappened', getOptionEncoder(getBooleanEncoder())],
        ['isMutable', getOptionEncoder(getBooleanEncoder())],
        ['tokenStandard', getOptionEncoder(getTokenStandardEncoder())],
        ['collection', getOptionEncoder(getCollectionEncoder())],
        ['uses', getOptionEncoder(getUsesEncoder())],
        ['collectionDetails', getOptionEncoder(getCollectionDetailsEncoder())],
        [
          'programmableConfig',
          getOptionEncoder(getProgrammableConfigEncoder()),
        ],
        ['delegateState', getOptionEncoder(getDelegateStateEncoder())],
        ['authorityType', getAuthorityTypeEncoder()],
      ],
      { description: 'UpdateV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 43,
      updateV1Discriminator: 0,
      tokenStandard: value.tokenStandard ?? some(TokenStandard.NonFungible),
    })
  ) as Encoder<UpdateV1InstructionDataArgs>;
}

export function getUpdateV1InstructionDataDecoder(): Decoder<UpdateV1InstructionData> {
  return getStructDecoder<UpdateV1InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['updateV1Discriminator', getU8Decoder()],
      ['authorizationData', getOptionDecoder(getAuthorizationDataDecoder())],
      ['newUpdateAuthority', getOptionDecoder(getAddressDecoder())],
      [
        'data',
        getOptionDecoder(
          getStructDecoder<{
            name: string;
            symbol: string;
            uri: string;
            sellerFeeBasisPoints: number;
            creators: Option<Array<Creator>>;
          }>([
            ['name', getStringDecoder()],
            ['symbol', getStringDecoder()],
            ['uri', getStringDecoder()],
            ['sellerFeeBasisPoints', getU16Decoder()],
            [
              'creators',
              getOptionDecoder(getArrayDecoder(getCreatorDecoder())),
            ],
          ])
        ),
      ],
      ['primarySaleHappened', getOptionDecoder(getBooleanDecoder())],
      ['isMutable', getOptionDecoder(getBooleanDecoder())],
      ['tokenStandard', getOptionDecoder(getTokenStandardDecoder())],
      ['collection', getOptionDecoder(getCollectionDecoder())],
      ['uses', getOptionDecoder(getUsesDecoder())],
      ['collectionDetails', getOptionDecoder(getCollectionDetailsDecoder())],
      ['programmableConfig', getOptionDecoder(getProgrammableConfigDecoder())],
      ['delegateState', getOptionDecoder(getDelegateStateDecoder())],
      ['authorityType', getAuthorityTypeDecoder()],
    ],
    { description: 'UpdateV1InstructionData' }
  ) as Decoder<UpdateV1InstructionData>;
}

export function getUpdateV1InstructionDataCodec(): Codec<
  UpdateV1InstructionDataArgs,
  UpdateV1InstructionData
> {
  return combineCodec(
    getUpdateV1InstructionDataEncoder(),
    getUpdateV1InstructionDataDecoder()
  );
}

export function updateV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    token?: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    delegateRecord?: TAccountDelegateRecord extends string
      ? Base58EncodedAddress<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: UpdateV1InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.sysvarInstructions ??
          'Sysvar1nstructions1111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.token ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.delegateRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getUpdateV1InstructionDataEncoder().encode(args),
    programAddress,
  } as UpdateV1Instruction<
    TProgram,
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules,
    TRemainingAccounts
  >;
}

// Input.
export type UpdateV1Input<
  TAccountAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountToken extends string,
  TAccountDelegateRecord extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Update authority or delegate */
  authority?: Signer<TAccountAuthority>;
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Master Edition account */
  masterEdition?: Base58EncodedAddress<TAccountMasterEdition>;
  /** Mint account */
  mint: Base58EncodedAddress<TAccountMint>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** System program */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** Token account */
  token?: Base58EncodedAddress<TAccountToken>;
  /** Delegate record PDA */
  delegateRecord?: Base58EncodedAddress<TAccountDelegateRecord>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Base58EncodedAddress<TAccountAuthorizationRules>;
  authorizationData: UpdateV1InstructionDataArgs['authorizationData'];
  newUpdateAuthority: UpdateV1InstructionDataArgs['newUpdateAuthority'];
  data: UpdateV1InstructionDataArgs['data'];
  primarySaleHappened: UpdateV1InstructionDataArgs['primarySaleHappened'];
  isMutable: UpdateV1InstructionDataArgs['isMutable'];
  tokenStandard?: UpdateV1InstructionDataArgs['tokenStandard'];
  collection: UpdateV1InstructionDataArgs['collection'];
  uses: UpdateV1InstructionDataArgs['uses'];
  collectionDetails: UpdateV1InstructionDataArgs['collectionDetails'];
  programmableConfig: UpdateV1InstructionDataArgs['programmableConfig'];
  delegateState: UpdateV1InstructionDataArgs['delegateState'];
  authorityType: UpdateV1InstructionDataArgs['authorityType'];
};

export async function updateV1<
  TReturn,
  TAccountAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountToken extends string,
  TAccountDelegateRecord extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      UpdateV1Instruction<
        TProgram,
        TAccountAuthority,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountToken,
        TAccountDelegateRecord,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
      TReturn
    >,
  input: UpdateV1Input<
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn>;
export async function updateV1<
  TAccountAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountToken extends string,
  TAccountDelegateRecord extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UpdateV1Input<
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    UpdateV1Instruction<
      TProgram,
      TAccountAuthority,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountToken,
      TAccountDelegateRecord,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function updateV1<
  TAccountAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountToken extends string,
  TAccountDelegateRecord extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UpdateV1Input<
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    UpdateV1Instruction<
      TProgram,
      TAccountAuthority,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountToken,
      TAccountDelegateRecord,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function updateV1<
  TReturn,
  TAccountAuthority extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountToken extends string,
  TAccountDelegateRecord extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | UpdateV1Input<
        TAccountAuthority,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountToken,
        TAccountDelegateRecord,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
  rawInput?: UpdateV1Input<
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UpdateV1Input<
    TAccountAuthority,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountToken,
    TAccountDelegateRecord,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof updateV1Instruction<
      TProgram,
      TAccountAuthority,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountToken,
      TAccountDelegateRecord,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    authority: { value: input.authority ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    token: { value: input.token ?? null, isWritable: false },
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: false },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Base58EncodedAddress<'Sysvar1nstructions1111111111111111111111111'>;
  }

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Wrapped instruction.
  const wrappedInstruction = {
    instruction: updateV1Instruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as UpdateV1InstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    signers,
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(wrappedInstruction)
    : wrappedInstruction;
}