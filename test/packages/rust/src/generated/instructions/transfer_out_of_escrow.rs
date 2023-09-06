//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct TransferOutOfEscrow {
    /// Escrow account
    pub escrow: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Wallet paying for the transaction and new account
    pub payer: solana_program::pubkey::Pubkey,
    /// Mint account for the new attribute
    pub attribute_mint: solana_program::pubkey::Pubkey,
    /// Token account source for the new attribute
    pub attribute_src: solana_program::pubkey::Pubkey,
    /// Token account, owned by TM, destination for the new attribute
    pub attribute_dst: solana_program::pubkey::Pubkey,
    /// Mint account that the escrow is attached
    pub escrow_mint: solana_program::pubkey::Pubkey,
    /// Token account that holds the token the escrow is attached to
    pub escrow_account: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Associated Token program
    pub ata_program: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// Authority/creator of the escrow account
    pub authority: Option<solana_program::pubkey::Pubkey>,
}

impl TransferOutOfEscrow {
    pub fn instruction(
        &self,
        args: TransferOutOfEscrowInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: TransferOutOfEscrowInstructionArgs,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(13 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.escrow,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.attribute_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.attribute_src,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.attribute_dst,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.escrow_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.escrow_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.ata_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        if let Some(authority) = self.authority {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authority, true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = TransferOutOfEscrowInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct TransferOutOfEscrowInstructionData {
    discriminator: u8,
}

impl TransferOutOfEscrowInstructionData {
    fn new() -> Self {
        Self { discriminator: 40 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct TransferOutOfEscrowInstructionArgs {
    pub amount: u64,
}

/// Instruction builder.
#[derive(Default)]
pub struct TransferOutOfEscrowBuilder {
    escrow: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    attribute_mint: Option<solana_program::pubkey::Pubkey>,
    attribute_src: Option<solana_program::pubkey::Pubkey>,
    attribute_dst: Option<solana_program::pubkey::Pubkey>,
    escrow_mint: Option<solana_program::pubkey::Pubkey>,
    escrow_account: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    ata_program: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    amount: Option<u64>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl TransferOutOfEscrowBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Escrow account
    #[inline(always)]
    pub fn escrow(&mut self, escrow: solana_program::pubkey::Pubkey) -> &mut Self {
        self.escrow = Some(escrow);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Wallet paying for the transaction and new account
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// Mint account for the new attribute
    #[inline(always)]
    pub fn attribute_mint(&mut self, attribute_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.attribute_mint = Some(attribute_mint);
        self
    }
    /// Token account source for the new attribute
    #[inline(always)]
    pub fn attribute_src(&mut self, attribute_src: solana_program::pubkey::Pubkey) -> &mut Self {
        self.attribute_src = Some(attribute_src);
        self
    }
    /// Token account, owned by TM, destination for the new attribute
    #[inline(always)]
    pub fn attribute_dst(&mut self, attribute_dst: solana_program::pubkey::Pubkey) -> &mut Self {
        self.attribute_dst = Some(attribute_dst);
        self
    }
    /// Mint account that the escrow is attached
    #[inline(always)]
    pub fn escrow_mint(&mut self, escrow_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.escrow_mint = Some(escrow_mint);
        self
    }
    /// Token account that holds the token the escrow is attached to
    #[inline(always)]
    pub fn escrow_account(&mut self, escrow_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.escrow_account = Some(escrow_account);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account, default to 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL']`
    /// Associated Token program
    #[inline(always)]
    pub fn ata_program(&mut self, ata_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.ata_program = Some(ata_program);
        self
    }
    /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
    /// Token program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// `[optional account, default to 'Sysvar1nstructions1111111111111111111111111']`
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Authority/creator of the escrow account
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.amount = Some(amount);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(&mut self, account: super::InstructionAccount) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(&mut self, accounts: &[super::InstructionAccount]) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = TransferOutOfEscrow {
            escrow: self.escrow.expect("escrow is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            payer: self.payer.expect("payer is not set"),
            attribute_mint: self.attribute_mint.expect("attribute_mint is not set"),
            attribute_src: self.attribute_src.expect("attribute_src is not set"),
            attribute_dst: self.attribute_dst.expect("attribute_dst is not set"),
            escrow_mint: self.escrow_mint.expect("escrow_mint is not set"),
            escrow_account: self.escrow_account.expect("escrow_account is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            ata_program: self.ata_program.unwrap_or(solana_program::pubkey!(
                "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            )),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            authority: self.authority,
        };
        let args = TransferOutOfEscrowInstructionArgs {
            amount: self.amount.clone().expect("amount is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `transfer_out_of_escrow` CPI accounts.
pub struct TransferOutOfEscrowCpiAccounts<'a> {
    /// Escrow account
    pub escrow: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Wallet paying for the transaction and new account
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account for the new attribute
    pub attribute_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account source for the new attribute
    pub attribute_src: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account, owned by TM, destination for the new attribute
    pub attribute_dst: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account that the escrow is attached
    pub escrow_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account that holds the token the escrow is attached to
    pub escrow_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Associated Token program
    pub ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// Authority/creator of the escrow account
    pub authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

/// `transfer_out_of_escrow` CPI instruction.
pub struct TransferOutOfEscrowCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Escrow account
    pub escrow: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Wallet paying for the transaction and new account
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account for the new attribute
    pub attribute_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account source for the new attribute
    pub attribute_src: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account, owned by TM, destination for the new attribute
    pub attribute_dst: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account that the escrow is attached
    pub escrow_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account that holds the token the escrow is attached to
    pub escrow_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Associated Token program
    pub ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// Authority/creator of the escrow account
    pub authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: TransferOutOfEscrowInstructionArgs,
}

impl<'a> TransferOutOfEscrowCpi<'a> {
    pub fn new(
        program: &'a solana_program::account_info::AccountInfo<'a>,
        accounts: TransferOutOfEscrowCpiAccounts<'a>,
        args: TransferOutOfEscrowInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            escrow: accounts.escrow,
            metadata: accounts.metadata,
            payer: accounts.payer,
            attribute_mint: accounts.attribute_mint,
            attribute_src: accounts.attribute_src,
            attribute_dst: accounts.attribute_dst,
            escrow_mint: accounts.escrow_mint,
            escrow_account: accounts.escrow_account,
            system_program: accounts.system_program,
            ata_program: accounts.ata_program,
            token_program: accounts.token_program,
            sysvar_instructions: accounts.sysvar_instructions,
            authority: accounts.authority,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccountInfo<'a>],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[super::InstructionAccountInfo<'a>],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(13 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.escrow.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.attribute_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.attribute_src.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.attribute_dst.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.escrow_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.escrow_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.ata_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        if let Some(authority) = self.authority {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authority.key,
                true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = TransferOutOfEscrowInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(13 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.escrow.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.attribute_mint.clone());
        account_infos.push(self.attribute_src.clone());
        account_infos.push(self.attribute_dst.clone());
        account_infos.push(self.escrow_mint.clone());
        account_infos.push(self.escrow_account.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.ata_program.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        if let Some(authority) = self.authority {
            account_infos.push(authority.clone());
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            account_infos.push(remaining_account.account_info().clone())
        });

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `transfer_out_of_escrow` CPI instruction builder.
pub struct TransferOutOfEscrowCpiBuilder<'a> {
    instruction: Box<TransferOutOfEscrowCpiBuilderInstruction<'a>>,
}

impl<'a> TransferOutOfEscrowCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(TransferOutOfEscrowCpiBuilderInstruction {
            __program: program,
            escrow: None,
            metadata: None,
            payer: None,
            attribute_mint: None,
            attribute_src: None,
            attribute_dst: None,
            escrow_mint: None,
            escrow_account: None,
            system_program: None,
            ata_program: None,
            token_program: None,
            sysvar_instructions: None,
            authority: None,
            amount: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Escrow account
    #[inline(always)]
    pub fn escrow(
        &mut self,
        escrow: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.escrow = Some(escrow);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Wallet paying for the transaction and new account
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// Mint account for the new attribute
    #[inline(always)]
    pub fn attribute_mint(
        &mut self,
        attribute_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.attribute_mint = Some(attribute_mint);
        self
    }
    /// Token account source for the new attribute
    #[inline(always)]
    pub fn attribute_src(
        &mut self,
        attribute_src: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.attribute_src = Some(attribute_src);
        self
    }
    /// Token account, owned by TM, destination for the new attribute
    #[inline(always)]
    pub fn attribute_dst(
        &mut self,
        attribute_dst: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.attribute_dst = Some(attribute_dst);
        self
    }
    /// Mint account that the escrow is attached
    #[inline(always)]
    pub fn escrow_mint(
        &mut self,
        escrow_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.escrow_mint = Some(escrow_mint);
        self
    }
    /// Token account that holds the token the escrow is attached to
    #[inline(always)]
    pub fn escrow_account(
        &mut self,
        escrow_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.escrow_account = Some(escrow_account);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// Associated Token program
    #[inline(always)]
    pub fn ata_program(
        &mut self,
        ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.ata_program = Some(ata_program);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Authority/creator of the escrow account
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    #[inline(always)]
    pub fn amount(&mut self, amount: u64) -> &mut Self {
        self.instruction.amount = Some(amount);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: super::InstructionAccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[super::InstructionAccountInfo<'a>],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = TransferOutOfEscrowInstructionArgs {
            amount: self.instruction.amount.clone().expect("amount is not set"),
        };
        let instruction = TransferOutOfEscrowCpi {
            __program: self.instruction.__program,

            escrow: self.instruction.escrow.expect("escrow is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            attribute_mint: self
                .instruction
                .attribute_mint
                .expect("attribute_mint is not set"),

            attribute_src: self
                .instruction
                .attribute_src
                .expect("attribute_src is not set"),

            attribute_dst: self
                .instruction
                .attribute_dst
                .expect("attribute_dst is not set"),

            escrow_mint: self
                .instruction
                .escrow_mint
                .expect("escrow_mint is not set"),

            escrow_account: self
                .instruction
                .escrow_account
                .expect("escrow_account is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            ata_program: self
                .instruction
                .ata_program
                .expect("ata_program is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            authority: self.instruction.authority,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct TransferOutOfEscrowCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    escrow: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    attribute_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    attribute_src: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    attribute_dst: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    escrow_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    escrow_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    ata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    amount: Option<u64>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
