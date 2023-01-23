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
} from '@lorisleiva/js-core';

// Accounts.
export type RemoveCreatorVerificationInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Creator */
  creator: Signer;
};

// Arguments.
export type RemoveCreatorVerificationInstructionData = {
  discriminator: number;
};

export type RemoveCreatorVerificationInstructionArgs = {};

export function getRemoveCreatorVerificationInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RemoveCreatorVerificationInstructionArgs,
  RemoveCreatorVerificationInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RemoveCreatorVerificationInstructionArgs,
    RemoveCreatorVerificationInstructionData,
    RemoveCreatorVerificationInstructionData
  >(
    s.struct<RemoveCreatorVerificationInstructionData>(
      [['discriminator', s.u8]],
      'RemoveCreatorVerificationInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 28,
        ...value,
      } as RemoveCreatorVerificationInstructionData)
  ) as Serializer<
    RemoveCreatorVerificationInstructionArgs,
    RemoveCreatorVerificationInstructionData
  >;
}

// Instruction.
export function removeCreatorVerification(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: RemoveCreatorVerificationInstructionAccounts
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
  const data = getRemoveCreatorVerificationInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}