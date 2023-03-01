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
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi';
import { DataV2, DataV2Args, getDataV2Serializer } from '../types';

// Accounts.
export type UpdateMetadataAccountV2InstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Update authority key */
  updateAuthority: Signer;
};

// Arguments.
export type UpdateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: Option<DataV2>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export type UpdateMetadataAccountV2InstructionDataArgs = {
  data: Option<DataV2Args>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export function getUpdateMetadataAccountV2InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UpdateMetadataAccountV2InstructionDataArgs,
  UpdateMetadataAccountV2InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UpdateMetadataAccountV2InstructionDataArgs,
    UpdateMetadataAccountV2InstructionData,
    UpdateMetadataAccountV2InstructionData
  >(
    s.struct<UpdateMetadataAccountV2InstructionData>(
      [
        ['discriminator', s.u8()],
        ['data', s.option(getDataV2Serializer(context))],
        ['updateAuthority', s.option(s.publicKey())],
        ['primarySaleHappened', s.option(s.bool())],
        ['isMutable', s.option(s.bool())],
      ],
      { description: 'UpdateMetadataAccountV2InstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 15,
      } as UpdateMetadataAccountV2InstructionData)
  ) as Serializer<
    UpdateMetadataAccountV2InstructionDataArgs,
    UpdateMetadataAccountV2InstructionData
  >;
}

// Instruction.
export function updateMetadataAccountV2(
  context: Pick<Context, 'serializer' | 'programs'>,
  accounts: UpdateMetadataAccountV2InstructionAccounts,
  args: UpdateMetadataAccountV2InstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = accounts.metadata;
  const updateAuthorityAccount = accounts.updateAuthority;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Data.
  const data =
    getUpdateMetadataAccountV2InstructionDataSerializer(context).serialize(
      args
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
