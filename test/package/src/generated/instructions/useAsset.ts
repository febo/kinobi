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
import {
  UseAssetArgs,
  UseAssetArgsArgs,
  getUseAssetArgsSerializer,
} from '../types';

// Accounts.
export type UseAssetInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Token Account Of NFT */
  tokenAccount: PublicKey;
  /** Mint of the Metadata */
  mint: PublicKey;
  /** Use authority or current owner of the asset */
  useAuthority: Signer;
  /** Owner */
  owner: PublicKey;
  /** SPL Token program */
  splTokenProgram?: PublicKey;
  /** Associated Token program */
  ataProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Use Authority Record PDA (if present the program assumes a delegated use authority) */
  useAuthorityRecord?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
};

// Arguments.
export type UseAssetInstructionData = {
  discriminator: number;
  useAssetArgs: UseAssetArgs;
};

export type UseAssetInstructionDataArgs = { useAssetArgs: UseAssetArgsArgs };

export function getUseAssetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UseAssetInstructionDataArgs, UseAssetInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    UseAssetInstructionDataArgs,
    UseAssetInstructionData,
    UseAssetInstructionData
  >(
    s.struct<UseAssetInstructionData>(
      [
        ['discriminator', s.u8()],
        ['useAssetArgs', getUseAssetArgsSerializer(context)],
      ],
      { description: 'UseAssetInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 45 } as UseAssetInstructionData)
  ) as Serializer<UseAssetInstructionDataArgs, UseAssetInstructionData>;
}

// Instruction.
export function useAsset(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: UseAssetInstructionAccounts & UseAssetInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = input.metadata;
  const tokenAccountAccount = input.tokenAccount;
  const mintAccount = input.mint;
  const useAuthorityAccount = input.useAuthority;
  const ownerAccount = input.owner;
  const splTokenProgramAccount = input.splTokenProgram ?? {
    ...context.programs.get('splToken').publicKey,
    isWritable: false,
  };
  const ataProgramAccount = input.ataProgram ?? {
    ...context.programs.get('splAssociatedToken').publicKey,
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').publicKey,
    isWritable: false,
  };
  const useAuthorityRecordAccount = input.useAuthorityRecord ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesAccount = input.authorizationRules ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesProgramAccount = input.authorizationRulesProgram ?? {
    ...programId,
    isWritable: false,
  };

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Token Account.
  keys.push({
    pubkey: tokenAccountAccount,
    isSigner: false,
    isWritable: isWritable(tokenAccountAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, true),
  });

  // Use Authority.
  signers.push(useAuthorityAccount);
  keys.push({
    pubkey: useAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(useAuthorityAccount, true),
  });

  // Owner.
  keys.push({
    pubkey: ownerAccount,
    isSigner: false,
    isWritable: isWritable(ownerAccount, false),
  });

  // Spl Token Program.
  keys.push({
    pubkey: splTokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(splTokenProgramAccount, false),
  });

  // Ata Program.
  keys.push({
    pubkey: ataProgramAccount,
    isSigner: false,
    isWritable: isWritable(ataProgramAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Use Authority Record.
  keys.push({
    pubkey: useAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(useAuthorityRecordAccount, true),
  });

  // Authorization Rules.
  keys.push({
    pubkey: authorizationRulesAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesAccount, false),
  });

  // Authorization Rules Program.
  keys.push({
    pubkey: authorizationRulesProgramAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesProgramAccount, false),
  });

  // Data.
  const data = getUseAssetInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
