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
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi';

// Accounts.
export type SignMetadataInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Creator */
  creator: Signer;
};

// Arguments.
export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SignMetadataInstructionDataArgs, SignMetadataInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    SignMetadataInstructionDataArgs,
    SignMetadataInstructionData,
    SignMetadataInstructionData
  >(
    s.struct<SignMetadataInstructionData>([['discriminator', s.u8()]], {
      description: 'SignMetadataInstructionData',
    }),
    (value) => ({ ...value, discriminator: 7 } as SignMetadataInstructionData)
  ) as Serializer<SignMetadataInstructionDataArgs, SignMetadataInstructionData>;
}

// Instruction.
export function signMetadata(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: SignMetadataInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const creatorAccount = input.creator;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Creator.
  signers.push(creatorAccount);
  keys.push({
    pubkey: creatorAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(creatorAccount, false),
  });

  // Data.
  const data = getSignMetadataInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
