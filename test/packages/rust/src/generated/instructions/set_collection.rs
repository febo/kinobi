//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SetCollection {
    pub candy_machine: solana_program::pubkey::Pubkey,

    pub authority: solana_program::pubkey::Pubkey,

    pub authority_pda: solana_program::pubkey::Pubkey,

    pub payer: solana_program::pubkey::Pubkey,

    pub collection_mint: solana_program::pubkey::Pubkey,

    pub collection_metadata: solana_program::pubkey::Pubkey,

    pub collection_authority_record: solana_program::pubkey::Pubkey,

    pub new_collection_update_authority: solana_program::pubkey::Pubkey,

    pub new_collection_metadata: solana_program::pubkey::Pubkey,

    pub new_collection_mint: solana_program::pubkey::Pubkey,

    pub new_collection_master_edition: solana_program::pubkey::Pubkey,

    pub new_collection_authority_record: solana_program::pubkey::Pubkey,

    pub token_metadata_program: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,
}

impl SetCollection {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(14 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.candy_machine,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.authority_pda,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.collection_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.collection_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.collection_authority_record,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_collection_update_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_collection_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_collection_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_collection_master_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_collection_authority_record,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_metadata_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let data = SetCollectionInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct SetCollectionInstructionData {
    discriminator: [u8; 8],
}

impl SetCollectionInstructionData {
    fn new() -> Self {
        Self {
            discriminator: [192, 254, 206, 76, 168, 182, 59, 223],
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SetCollectionBuilder {
    candy_machine: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    authority_pda: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    collection_mint: Option<solana_program::pubkey::Pubkey>,
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
    collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    new_collection_update_authority: Option<solana_program::pubkey::Pubkey>,
    new_collection_metadata: Option<solana_program::pubkey::Pubkey>,
    new_collection_mint: Option<solana_program::pubkey::Pubkey>,
    new_collection_master_edition: Option<solana_program::pubkey::Pubkey>,
    new_collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    token_metadata_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl SetCollectionBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn candy_machine(&mut self, candy_machine: solana_program::pubkey::Pubkey) -> &mut Self {
        self.candy_machine = Some(candy_machine);
        self
    }
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    #[inline(always)]
    pub fn authority_pda(&mut self, authority_pda: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority_pda = Some(authority_pda);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn collection_mint(
        &mut self,
        collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_mint = Some(collection_mint);
        self
    }
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_metadata = Some(collection_metadata);
        self
    }
    #[inline(always)]
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority_record = Some(collection_authority_record);
        self
    }
    #[inline(always)]
    pub fn new_collection_update_authority(
        &mut self,
        new_collection_update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_collection_update_authority = Some(new_collection_update_authority);
        self
    }
    #[inline(always)]
    pub fn new_collection_metadata(
        &mut self,
        new_collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_collection_metadata = Some(new_collection_metadata);
        self
    }
    #[inline(always)]
    pub fn new_collection_mint(
        &mut self,
        new_collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_collection_mint = Some(new_collection_mint);
        self
    }
    #[inline(always)]
    pub fn new_collection_master_edition(
        &mut self,
        new_collection_master_edition: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_collection_master_edition = Some(new_collection_master_edition);
        self
    }
    #[inline(always)]
    pub fn new_collection_authority_record(
        &mut self,
        new_collection_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_collection_authority_record = Some(new_collection_authority_record);
        self
    }
    /// `[optional account, default to 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s']`
    #[inline(always)]
    pub fn token_metadata_program(
        &mut self,
        token_metadata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.token_metadata_program = Some(token_metadata_program);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
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
        let accounts =
            SetCollection {
                candy_machine: self.candy_machine.expect("candy_machine is not set"),
                authority: self.authority.expect("authority is not set"),
                authority_pda: self.authority_pda.expect("authority_pda is not set"),
                payer: self.payer.expect("payer is not set"),
                collection_mint: self.collection_mint.expect("collection_mint is not set"),
                collection_metadata: self
                    .collection_metadata
                    .expect("collection_metadata is not set"),
                collection_authority_record: self
                    .collection_authority_record
                    .expect("collection_authority_record is not set"),
                new_collection_update_authority: self
                    .new_collection_update_authority
                    .expect("new_collection_update_authority is not set"),
                new_collection_metadata: self
                    .new_collection_metadata
                    .expect("new_collection_metadata is not set"),
                new_collection_mint: self
                    .new_collection_mint
                    .expect("new_collection_mint is not set"),
                new_collection_master_edition: self
                    .new_collection_master_edition
                    .expect("new_collection_master_edition is not set"),
                new_collection_authority_record: self
                    .new_collection_authority_record
                    .expect("new_collection_authority_record is not set"),
                token_metadata_program: self.token_metadata_program.unwrap_or(
                    solana_program::pubkey!("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                ),
                system_program: self
                    .system_program
                    .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `set_collection` CPI accounts.
pub struct SetCollectionCpiAccounts<'a> {
    pub candy_machine: &'a solana_program::account_info::AccountInfo<'a>,

    pub authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub authority_pda: &'a solana_program::account_info::AccountInfo<'a>,

    pub payer: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_update_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_master_edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,

    pub token_metadata_program: &'a solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
}

/// `set_collection` CPI instruction.
pub struct SetCollectionCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,

    pub candy_machine: &'a solana_program::account_info::AccountInfo<'a>,

    pub authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub authority_pda: &'a solana_program::account_info::AccountInfo<'a>,

    pub payer: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_update_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_master_edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub new_collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,

    pub token_metadata_program: &'a solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> SetCollectionCpi<'a> {
    pub fn new(
        program: &'a solana_program::account_info::AccountInfo<'a>,
        accounts: SetCollectionCpiAccounts<'a>,
    ) -> Self {
        Self {
            __program: program,
            candy_machine: accounts.candy_machine,
            authority: accounts.authority,
            authority_pda: accounts.authority_pda,
            payer: accounts.payer,
            collection_mint: accounts.collection_mint,
            collection_metadata: accounts.collection_metadata,
            collection_authority_record: accounts.collection_authority_record,
            new_collection_update_authority: accounts.new_collection_update_authority,
            new_collection_metadata: accounts.new_collection_metadata,
            new_collection_mint: accounts.new_collection_mint,
            new_collection_master_edition: accounts.new_collection_master_edition,
            new_collection_authority_record: accounts.new_collection_authority_record,
            token_metadata_program: accounts.token_metadata_program,
            system_program: accounts.system_program,
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
        let mut accounts = Vec::with_capacity(14 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.candy_machine.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.authority_pda.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.collection_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.collection_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.collection_authority_record.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_collection_update_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_collection_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_collection_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_collection_master_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_collection_authority_record.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_metadata_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let data = SetCollectionInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(14 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.candy_machine.clone());
        account_infos.push(self.authority.clone());
        account_infos.push(self.authority_pda.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.collection_mint.clone());
        account_infos.push(self.collection_metadata.clone());
        account_infos.push(self.collection_authority_record.clone());
        account_infos.push(self.new_collection_update_authority.clone());
        account_infos.push(self.new_collection_metadata.clone());
        account_infos.push(self.new_collection_mint.clone());
        account_infos.push(self.new_collection_master_edition.clone());
        account_infos.push(self.new_collection_authority_record.clone());
        account_infos.push(self.token_metadata_program.clone());
        account_infos.push(self.system_program.clone());
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

/// `set_collection` CPI instruction builder.
pub struct SetCollectionCpiBuilder<'a> {
    instruction: Box<SetCollectionCpiBuilderInstruction<'a>>,
}

impl<'a> SetCollectionCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SetCollectionCpiBuilderInstruction {
            __program: program,
            candy_machine: None,
            authority: None,
            authority_pda: None,
            payer: None,
            collection_mint: None,
            collection_metadata: None,
            collection_authority_record: None,
            new_collection_update_authority: None,
            new_collection_metadata: None,
            new_collection_mint: None,
            new_collection_master_edition: None,
            new_collection_authority_record: None,
            token_metadata_program: None,
            system_program: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn candy_machine(
        &mut self,
        candy_machine: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.candy_machine = Some(candy_machine);
        self
    }
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    #[inline(always)]
    pub fn authority_pda(
        &mut self,
        authority_pda: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority_pda = Some(authority_pda);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn collection_mint(
        &mut self,
        collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_mint = Some(collection_mint);
        self
    }
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_metadata = Some(collection_metadata);
        self
    }
    #[inline(always)]
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_authority_record = Some(collection_authority_record);
        self
    }
    #[inline(always)]
    pub fn new_collection_update_authority(
        &mut self,
        new_collection_update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_collection_update_authority = Some(new_collection_update_authority);
        self
    }
    #[inline(always)]
    pub fn new_collection_metadata(
        &mut self,
        new_collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_collection_metadata = Some(new_collection_metadata);
        self
    }
    #[inline(always)]
    pub fn new_collection_mint(
        &mut self,
        new_collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_collection_mint = Some(new_collection_mint);
        self
    }
    #[inline(always)]
    pub fn new_collection_master_edition(
        &mut self,
        new_collection_master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_collection_master_edition = Some(new_collection_master_edition);
        self
    }
    #[inline(always)]
    pub fn new_collection_authority_record(
        &mut self,
        new_collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_collection_authority_record = Some(new_collection_authority_record);
        self
    }
    #[inline(always)]
    pub fn token_metadata_program(
        &mut self,
        token_metadata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_metadata_program = Some(token_metadata_program);
        self
    }
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
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
        let instruction = SetCollectionCpi {
            __program: self.instruction.__program,

            candy_machine: self
                .instruction
                .candy_machine
                .expect("candy_machine is not set"),

            authority: self.instruction.authority.expect("authority is not set"),

            authority_pda: self
                .instruction
                .authority_pda
                .expect("authority_pda is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            collection_mint: self
                .instruction
                .collection_mint
                .expect("collection_mint is not set"),

            collection_metadata: self
                .instruction
                .collection_metadata
                .expect("collection_metadata is not set"),

            collection_authority_record: self
                .instruction
                .collection_authority_record
                .expect("collection_authority_record is not set"),

            new_collection_update_authority: self
                .instruction
                .new_collection_update_authority
                .expect("new_collection_update_authority is not set"),

            new_collection_metadata: self
                .instruction
                .new_collection_metadata
                .expect("new_collection_metadata is not set"),

            new_collection_mint: self
                .instruction
                .new_collection_mint
                .expect("new_collection_mint is not set"),

            new_collection_master_edition: self
                .instruction
                .new_collection_master_edition
                .expect("new_collection_master_edition is not set"),

            new_collection_authority_record: self
                .instruction
                .new_collection_authority_record
                .expect("new_collection_authority_record is not set"),

            token_metadata_program: self
                .instruction
                .token_metadata_program
                .expect("token_metadata_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct SetCollectionCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    candy_machine: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authority_pda: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_collection_update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_collection_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_collection_master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_metadata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
