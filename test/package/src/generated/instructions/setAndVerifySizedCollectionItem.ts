/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type SetAndVerifySizedCollectionItemInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Update Authority of Collection NFT and NFT */
  updateAuthority: PublicKey | Pda;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collection: PublicKey | Pda;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey | Pda;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey | Pda;
};

// Data.
export type SetAndVerifySizedCollectionItemInstructionData = {
  discriminator: number;
};

export type SetAndVerifySizedCollectionItemInstructionDataArgs = {};

export function getSetAndVerifySizedCollectionItemInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetAndVerifySizedCollectionItemInstructionDataArgs,
  SetAndVerifySizedCollectionItemInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetAndVerifySizedCollectionItemInstructionDataArgs,
    any,
    SetAndVerifySizedCollectionItemInstructionData
  >(
    s.struct<SetAndVerifySizedCollectionItemInstructionData>(
      [['discriminator', s.u8()]],
      { description: 'SetAndVerifySizedCollectionItemInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 32 })
  ) as Serializer<
    SetAndVerifySizedCollectionItemInstructionDataArgs,
    SetAndVerifySizedCollectionItemInstructionData
  >;
}

// Instruction.
export function setAndVerifySizedCollectionItem(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: SetAndVerifySizedCollectionItemInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    metadata: [input.metadata, true] as const,
    collectionAuthority: [input.collectionAuthority, false] as const,
    updateAuthority: [input.updateAuthority, false] as const,
    collectionMint: [input.collectionMint, false] as const,
    collection: [input.collection, true] as const,
    collectionMasterEditionAccount: [
      input.collectionMasterEditionAccount,
      true,
    ] as const,
    collectionAuthorityRecord: [
      input.collectionAuthorityRecord,
      false,
    ] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.updateAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collection, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionMasterEditionAccount,
    false
  );
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionAuthorityRecord,
    true
  );

  // Data.
  const data = getSetAndVerifySizedCollectionItemInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
