//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::MintPrintingTokensViaTokenArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct DeprecatedMintPrintingTokens {
    /// Destination account
    pub destination: solana_program::pubkey::Pubkey,
    /// Printing mint
    pub printing_mint: solana_program::pubkey::Pubkey,
    /// Update authority
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
    pub master_edition: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// Rent
    pub rent: solana_program::pubkey::Pubkey,
}

impl DeprecatedMintPrintingTokens {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: DeprecatedMintPrintingTokensInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(7);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.destination,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.printing_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.master_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.rent, false,
        ));

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct DeprecatedMintPrintingTokensInstructionArgs {
    discriminator: u8,
    pub mint_printing_tokens_via_token_args: MintPrintingTokensViaTokenArgs,
}

impl DeprecatedMintPrintingTokensInstructionArgs {
    pub fn new(mint_printing_tokens_via_token_args: MintPrintingTokensViaTokenArgs) -> Self {
        Self {
            discriminator: 9,
            mint_printing_tokens_via_token_args,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct DeprecatedMintPrintingTokensBuilder {
    destination: Option<solana_program::pubkey::Pubkey>,
    printing_mint: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    mint_printing_tokens_via_token_args: Option<MintPrintingTokensViaTokenArgs>,
}

impl DeprecatedMintPrintingTokensBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Destination account
    #[inline(always)]
    pub fn destination(&mut self, destination: solana_program::pubkey::Pubkey) -> &mut Self {
        self.destination = Some(destination);
        self
    }
    /// Printing mint
    #[inline(always)]
    pub fn printing_mint(&mut self, printing_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.printing_mint = Some(printing_mint);
        self
    }
    /// Update authority
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// Rent
    #[inline(always)]
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn mint_printing_tokens_via_token_args(
        &mut self,
        mint_printing_tokens_via_token_args: MintPrintingTokensViaTokenArgs,
    ) -> &mut Self {
        self.mint_printing_tokens_via_token_args = Some(mint_printing_tokens_via_token_args);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = DeprecatedMintPrintingTokens {
            destination: self.destination.expect("destination is not set"),
            printing_mint: self.printing_mint.expect("printing_mint is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            master_edition: self.master_edition.expect("master_edition is not set"),
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            rent: self.rent.unwrap_or(solana_program::pubkey!(
                "SysvarRent111111111111111111111111111111111"
            )),
        };
        let args = DeprecatedMintPrintingTokensInstructionArgs::new(
            self.mint_printing_tokens_via_token_args
                .clone()
                .expect("mint_printing_tokens_via_token_args is not set"),
        );

        accounts.instruction(args)
    }
}

/// `deprecated_mint_printing_tokens` CPI instruction.
pub struct DeprecatedMintPrintingTokensCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Destination account
    pub destination: &'a solana_program::account_info::AccountInfo<'a>,
    /// Printing mint
    pub printing_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Update authority
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
    pub master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Rent
    pub rent: &'a solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: DeprecatedMintPrintingTokensInstructionArgs,
}

impl<'a> DeprecatedMintPrintingTokensCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(7);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.destination.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.printing_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.master_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.rent.key,
            false,
        ));

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: self.__args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(7 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.destination.clone());
        account_infos.push(self.printing_mint.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.master_edition.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.rent.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `deprecated_mint_printing_tokens` CPI instruction builder.
pub struct DeprecatedMintPrintingTokensCpiBuilder<'a> {
    instruction: Box<DeprecatedMintPrintingTokensCpiBuilderInstruction<'a>>,
}

impl<'a> DeprecatedMintPrintingTokensCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(DeprecatedMintPrintingTokensCpiBuilderInstruction {
            __program: program,
            destination: None,
            printing_mint: None,
            update_authority: None,
            metadata: None,
            master_edition: None,
            token_program: None,
            rent: None,
            mint_printing_tokens_via_token_args: None,
        });
        Self { instruction }
    }
    /// Destination account
    #[inline(always)]
    pub fn destination(
        &mut self,
        destination: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.destination = Some(destination);
        self
    }
    /// Printing mint
    #[inline(always)]
    pub fn printing_mint(
        &mut self,
        printing_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.printing_mint = Some(printing_mint);
        self
    }
    /// Update authority
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
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
    /// Rent
    #[inline(always)]
    pub fn rent(&mut self, rent: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn mint_printing_tokens_via_token_args(
        &mut self,
        mint_printing_tokens_via_token_args: MintPrintingTokensViaTokenArgs,
    ) -> &mut Self {
        self.instruction.mint_printing_tokens_via_token_args =
            Some(mint_printing_tokens_via_token_args);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> DeprecatedMintPrintingTokensCpi<'a> {
        let args = DeprecatedMintPrintingTokensInstructionArgs::new(
            self.instruction
                .mint_printing_tokens_via_token_args
                .clone()
                .expect("mint_printing_tokens_via_token_args is not set"),
        );

        DeprecatedMintPrintingTokensCpi {
            __program: self.instruction.__program,

            destination: self
                .instruction
                .destination
                .expect("destination is not set"),

            printing_mint: self
                .instruction
                .printing_mint
                .expect("printing_mint is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            master_edition: self
                .instruction
                .master_edition
                .expect("master_edition is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            rent: self.instruction.rent.expect("rent is not set"),
            __args: args,
        }
    }
}

struct DeprecatedMintPrintingTokensCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    destination: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    printing_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_printing_tokens_via_token_args: Option<MintPrintingTokensViaTokenArgs>,
}
