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
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: CreateFrequencyRuleInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(3);
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

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateFrequencyRuleInstructionArgs {
    discriminator: u8,
    pub rule_set_name: String,
    pub freq_rule_name: String,
    pub last_update: i64,
    pub period: i64,
}

impl CreateFrequencyRuleInstructionArgs {
    pub fn new(
        rule_set_name: String,
        freq_rule_name: String,
        last_update: i64,
        period: i64,
    ) -> Self {
        Self {
            discriminator: 2,
            rule_set_name,
            freq_rule_name,
            last_update,
            period,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateFrequencyRuleBuilder {
    payer: Option<solana_program::pubkey::Pubkey>,
    frequency_pda: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rule_set_name: Option<String>,
    freq_rule_name: Option<String>,
    last_update: Option<i64>,
    period: Option<i64>,
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
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateFrequencyRule {
            payer: self.payer.expect("payer is not set"),
            frequency_pda: self.frequency_pda.expect("frequency_pda is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
        };
        let args = CreateFrequencyRuleInstructionArgs::new(
            self.rule_set_name
                .clone()
                .expect("rule_set_name is not set"),
            self.freq_rule_name
                .clone()
                .expect("freq_rule_name is not set"),
            self.last_update.clone().expect("last_update is not set"),
            self.period.clone().expect("period is not set"),
        );

        accounts.instruction(args)
    }
}

/// `create_frequency_rule` CPI instruction.
pub struct CreateFrequencyRuleCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Payer and creator of the Frequency Rule
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// The PDA account where the Frequency Rule is stored
    pub frequency_pda: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: CreateFrequencyRuleInstructionArgs,
}

impl<'a> CreateFrequencyRuleCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(3);
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

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
            accounts,
            data: self.__args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(3 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.frequency_pda.clone());
        account_infos.push(self.system_program.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `create_frequency_rule` CPI instruction builder.
pub struct CreateFrequencyRuleCpiBuilder<'a> {
    instruction: Box<CreateFrequencyRuleCpiBuilderInstruction<'a>>,
}

impl<'a> CreateFrequencyRuleCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateFrequencyRuleCpiBuilderInstruction {
            __program: program,
            payer: None,
            frequency_pda: None,
            system_program: None,
            rule_set_name: None,
            freq_rule_name: None,
            last_update: None,
            period: None,
        });
        Self { instruction }
    }
    /// Payer and creator of the Frequency Rule
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// The PDA account where the Frequency Rule is stored
    #[inline(always)]
    pub fn frequency_pda(
        &mut self,
        frequency_pda: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.frequency_pda = Some(frequency_pda);
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
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> CreateFrequencyRuleCpi<'a> {
        let args = CreateFrequencyRuleInstructionArgs::new(
            self.instruction
                .rule_set_name
                .clone()
                .expect("rule_set_name is not set"),
            self.instruction
                .freq_rule_name
                .clone()
                .expect("freq_rule_name is not set"),
            self.instruction
                .last_update
                .clone()
                .expect("last_update is not set"),
            self.instruction.period.clone().expect("period is not set"),
        );

        CreateFrequencyRuleCpi {
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
        }
    }
}

struct CreateFrequencyRuleCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    frequency_pda: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    rule_set_name: Option<String>,
    freq_rule_name: Option<String>,
    last_update: Option<i64>,
    period: Option<i64>,
}
