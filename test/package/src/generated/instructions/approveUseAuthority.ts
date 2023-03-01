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
export type ApproveUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey;
  /** Owner */
  owner: Signer;
  /** Payer */
  payer?: Signer;
  /** A Use Authority */
  user: PublicKey;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Mint of Metadata */
  mint: PublicKey;
  /** Program As Signer (Burner) */
  burner: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type ApproveUseAuthorityInstructionDataArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ApproveUseAuthorityInstructionDataArgs,
  ApproveUseAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ApproveUseAuthorityInstructionDataArgs,
    ApproveUseAuthorityInstructionData,
    ApproveUseAuthorityInstructionData
  >(
    s.struct<ApproveUseAuthorityInstructionData>(
      [
        ['discriminator', s.u8()],
        ['numberOfUses', s.u64()],
      ],
      { description: 'ApproveUseAuthorityInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 20 } as ApproveUseAuthorityInstructionData)
  ) as Serializer<
    ApproveUseAuthorityInstructionDataArgs,
    ApproveUseAuthorityInstructionData
  >;
}

// Instruction.
export function approveUseAuthority(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: ApproveUseAuthorityInstructionAccounts &
    ApproveUseAuthorityInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const useAuthorityRecordAccount = input.useAuthorityRecord;
  const ownerAccount = input.owner;
  const payerAccount = input.payer ?? context.payer;
  const userAccount = input.user;
  const ownerTokenAccountAccount = input.ownerTokenAccount;
  const metadataAccount = input.metadata;
  const mintAccount = input.mint;
  const burnerAccount = input.burner;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...context.programs.get('splToken').publicKey,
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').publicKey,
    isWritable: false,
  };
  const rentAccount = input.rent;

  // Use Authority Record.
  keys.push({
    pubkey: useAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(useAuthorityRecordAccount, true),
  });

  // Owner.
  signers.push(ownerAccount);
  keys.push({
    pubkey: ownerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(ownerAccount, true),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // User.
  keys.push({
    pubkey: userAccount,
    isSigner: false,
    isWritable: isWritable(userAccount, false),
  });

  // Owner Token Account.
  keys.push({
    pubkey: ownerTokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(ownerTokenAccountAccount, true),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Burner.
  keys.push({
    pubkey: burnerAccount,
    isSigner: false,
    isWritable: isWritable(burnerAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent (optional).
  if (rentAccount) {
    keys.push({
      pubkey: rentAccount,
      isSigner: false,
      isWritable: isWritable(rentAccount, false),
    });
  }

  // Data.
  const data =
    getApproveUseAuthorityInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
