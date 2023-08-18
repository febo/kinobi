//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
pub struct FrequencyAccount {
    /// Test with only one line.
    pub key: u64,
    /// Test with multiple lines
    /// and this is the second line.
    pub last_update: i64,
    pub period: i64,
}

impl FrequencyAccount {
    pub const LEN: usize = 24;

    pub fn find_pda() -> (solana_program::pubkey::Pubkey, u8) {
        solana_program::pubkey::Pubkey::find_program_address(
            &[
                "frequency_pda".as_bytes(),
                crate::MPL_TOKEN_AUTH_RULES_ID.as_ref(),
            ],
            &crate::MPL_TOKEN_AUTH_RULES_ID,
        )
    }
    pub fn create_pda(
        bump: u8,
    ) -> Result<solana_program::pubkey::Pubkey, solana_program::pubkey::PubkeyError> {
        solana_program::pubkey::Pubkey::create_program_address(
            &[
                "frequency_pda".as_bytes(),
                crate::MPL_TOKEN_AUTH_RULES_ID.as_ref(),
                &[bump],
            ],
            &crate::MPL_TOKEN_AUTH_RULES_ID,
        )
    }
}

impl<'a> TryFrom<&'a solana_program::account_info::AccountInfo<'a>> for FrequencyAccount {
    type Error = std::io::Error;

    fn try_from(
        account_info: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> Result<Self, Self::Error> {
        let mut data: &[u8] = &(*account_info.data).borrow();
        Self::deserialize(&mut data)
    }
}
