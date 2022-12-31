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
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type CloseEscrowAccountInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint account */
  mint: PublicKey;
  /** Token account */
  tokenAccount: PublicKey;
  /** Edition account */
  edition: PublicKey;
  /** Wallet paying for the transaction and new account */
  payer: Signer;
  /** System program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
};

// Discriminator.
export type CloseEscrowAccountInstructionDiscriminator = number;
export function getCloseEscrowAccountInstructionDiscriminator(): CloseEscrowAccountInstructionDiscriminator {
  return 39;
}

// Data.
type CloseEscrowAccountInstructionData = {
  discriminator: CloseEscrowAccountInstructionDiscriminator;
};
export function getCloseEscrowAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<{}> {
  const s = context.serializer;
  const discriminator = getCloseEscrowAccountInstructionDiscriminator();
  const serializer: Serializer<CloseEscrowAccountInstructionData> =
    s.struct<CloseEscrowAccountInstructionData>(
      [['discriminator', s.u8]],
      'CloseEscrowAccountInstructionData'
    );
  return mapSerializer(serializer, () => ({ discriminator }));
}

// Instruction.
export function closeEscrowAccount(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: CloseEscrowAccountInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplDigitalAsset',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Escrow.
  keys.push({ pubkey: input.escrow, isSigner: false, isWritable: false });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Token Account.
  keys.push({ pubkey: input.tokenAccount, isSigner: false, isWritable: false });

  // Edition.
  keys.push({ pubkey: input.edition, isSigner: false, isWritable: false });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Sysvar Instructions.
  keys.push({
    pubkey:
      input.sysvarInstructions ??
      context.eddsa.createPublicKey(
        'Sysvar1nstructions1111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Data.
  const data = getCloseEscrowAccountInstructionDataSerializer(
    context
  ).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}