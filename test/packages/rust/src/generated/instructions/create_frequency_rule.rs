//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateFrequencyRule {
    /// Payer and creator of the Frequency Rule
    pub payer: solana_program::pubkey::Pubkey,
    /// The PDA account where the Frequency Rule is stored
    pub frequency_pda: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
}

impl CreateFrequencyRule {
    pub fn instruction(
        &self,
        args: CreateFrequencyRuleInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: CreateFrequencyRuleInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.frequency_pda,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = CreateFrequencyRuleInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct CreateFrequencyRuleInstructionData {
    discriminator: u8,
}

impl CreateFrequencyRuleInstructionData {
    fn new() -> Self {
        Self { discriminator: 2 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct CreateFrequencyRuleInstructionArgs {
    pub rule_set_name: String,
    pub freq_rule_name: String,
    pub last_update: i64,
    pub period: i64,
}

/// Instruction builder for `CreateFrequencyRule`.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[writable]` frequency_pda
///   2. `[optional]` system_program (default to `11111111111111111111111111111111`)
#[derive(Default)]
pub struct CreateFrequencyRuleBuilder {
    payer: Option<solana_program::pubkey::Pubkey>,
    frequency_pda: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rule_set_name: Option<String>,
    freq_rule_name: Option<String>,
    last_update: Option<i64>,
    period: Option<i64>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateFrequencyRuleBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Payer and creator of the Frequency Rule
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// The PDA account where the Frequency Rule is stored
    #[inline(always)]
    pub fn frequency_pda(&mut self, frequency_pda: solana_program::pubkey::Pubkey) -> &mut Self {
        self.frequency_pda = Some(frequency_pda);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn rule_set_name(&mut self, rule_set_name: String) -> &mut Self {
        self.rule_set_name = Some(rule_set_name);
        self
    }
    #[inline(always)]
    pub fn freq_rule_name(&mut self, freq_rule_name: String) -> &mut Self {
        self.freq_rule_name = Some(freq_rule_name);
        self
    }
    #[inline(always)]
    pub fn last_update(&mut self, last_update: i64) -> &mut Self {
        self.last_update = Some(last_update);
        self
    }
    #[inline(always)]
    pub fn period(&mut self, period: i64) -> &mut Self {
        self.period = Some(period);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateFrequencyRule {
            payer: self.payer.expect("payer is not set"),
            frequency_pda: self.frequency_pda.expect("frequency_pda is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
        };
        let args = CreateFrequencyRuleInstructionArgs {
            rule_set_name: self
                .rule_set_name
                .clone()
                .expect("rule_set_name is not set"),
            freq_rule_name: self
                .freq_rule_name
                .clone()
                .expect("freq_rule_name is not set"),
            last_update: self.last_update.clone().expect("last_update is not set"),
            period: self.period.clone().expect("period is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `create_frequency_rule` CPI accounts.
pub struct CreateFrequencyRuleCpiAccounts<'a, 'b> {
    /// Payer and creator of the Frequency Rule
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// The PDA account where the Frequency Rule is stored
    pub frequency_pda: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `create_frequency_rule` CPI instruction.
pub struct CreateFrequencyRuleCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Payer and creator of the Frequency Rule
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// The PDA account where the Frequency Rule is stored
    pub frequency_pda: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: CreateFrequencyRuleInstructionArgs,
}

impl<'a, 'b> CreateFrequencyRuleCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CreateFrequencyRuleCpiAccounts<'a, 'b>,
        args: CreateFrequencyRuleInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            payer: accounts.payer,
            frequency_pda: accounts.frequency_pda,
            system_program: accounts.system_program,
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.frequency_pda.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = CreateFrequencyRuleInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(3 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.frequency_pda.clone());
        account_infos.push(self.system_program.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `CreateFrequencyRule` via CPI.
///
/// ### Accounts:
///
///   0. `[writable, signer]` payer
///   1. `[writable]` frequency_pda
///   2. `[]` system_program
pub struct CreateFrequencyRuleCpiBuilder<'a, 'b> {
    instruction: Box<CreateFrequencyRuleCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateFrequencyRuleCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateFrequencyRuleCpiBuilderInstruction {
            __program: program,
            payer: None,
            frequency_pda: None,
            system_program: None,
            rule_set_name: None,
            freq_rule_name: None,
            last_update: None,
            period: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Payer and creator of the Frequency Rule
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// The PDA account where the Frequency Rule is stored
    #[inline(always)]
    pub fn frequency_pda(
        &mut self,
        frequency_pda: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.frequency_pda = Some(frequency_pda);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    #[inline(always)]
    pub fn rule_set_name(&mut self, rule_set_name: String) -> &mut Self {
        self.instruction.rule_set_name = Some(rule_set_name);
        self
    }
    #[inline(always)]
    pub fn freq_rule_name(&mut self, freq_rule_name: String) -> &mut Self {
        self.instruction.freq_rule_name = Some(freq_rule_name);
        self
    }
    #[inline(always)]
    pub fn last_update(&mut self, last_update: i64) -> &mut Self {
        self.instruction.last_update = Some(last_update);
        self
    }
    #[inline(always)]
    pub fn period(&mut self, period: i64) -> &mut Self {
        self.instruction.period = Some(period);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        let args = CreateFrequencyRuleInstructionArgs {
            rule_set_name: self
                .instruction
                .rule_set_name
                .clone()
                .expect("rule_set_name is not set"),
            freq_rule_name: self
                .instruction
                .freq_rule_name
                .clone()
                .expect("freq_rule_name is not set"),
            last_update: self
                .instruction
                .last_update
                .clone()
                .expect("last_update is not set"),
            period: self.instruction.period.clone().expect("period is not set"),
        };
        let instruction = CreateFrequencyRuleCpi {
            __program: self.instruction.__program,

            payer: self.instruction.payer.expect("payer is not set"),

            frequency_pda: self
                .instruction
                .frequency_pda
                .expect("frequency_pda is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct CreateFrequencyRuleCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    frequency_pda: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rule_set_name: Option<String>,
    freq_rule_name: Option<String>,
    last_update: Option<i64>,
    period: Option<i64>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
