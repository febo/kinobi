/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@lorisleiva/js-core';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/**
 * IncorrectOwner: 'Account does not have correct owner'
 * @category Errors
 */
export class CmIncorrectOwnerError extends ProgramError {
  readonly name: string = 'IncorrectOwner';
  readonly code: number = 0x1770; // 6000
  constructor(program: Program, cause?: Error) {
    super('Account does not have correct owner', program, cause);
  }
}
codeToErrorMap.set(0x1770, CmIncorrectOwnerError);
nameToErrorMap.set('IncorrectOwner', CmIncorrectOwnerError);

/**
 * Uninitialized: 'Account is not initialized'
 * @category Errors
 */
export class CmUninitializedError extends ProgramError {
  readonly name: string = 'Uninitialized';
  readonly code: number = 0x1771; // 6001
  constructor(program: Program, cause?: Error) {
    super('Account is not initialized', program, cause);
  }
}
codeToErrorMap.set(0x1771, CmUninitializedError);
nameToErrorMap.set('Uninitialized', CmUninitializedError);

/**
 * MintMismatch: 'Mint Mismatch'
 * @category Errors
 */
export class CmMintMismatchError extends ProgramError {
  readonly name: string = 'MintMismatch';
  readonly code: number = 0x1772; // 6002
  constructor(program: Program, cause?: Error) {
    super('Mint Mismatch', program, cause);
  }
}
codeToErrorMap.set(0x1772, CmMintMismatchError);
nameToErrorMap.set('MintMismatch', CmMintMismatchError);

/**
 * IndexGreaterThanLength: 'Index greater than length'
 * @category Errors
 */
export class CmIndexGreaterThanLengthError extends ProgramError {
  readonly name: string = 'IndexGreaterThanLength';
  readonly code: number = 0x1773; // 6003
  constructor(program: Program, cause?: Error) {
    super('Index greater than length', program, cause);
  }
}
codeToErrorMap.set(0x1773, CmIndexGreaterThanLengthError);
nameToErrorMap.set('IndexGreaterThanLength', CmIndexGreaterThanLengthError);

/**
 * NumericalOverflowError: 'Numerical overflow error'
 * @category Errors
 */
export class CmNumericalOverflowErrorError extends ProgramError {
  readonly name: string = 'NumericalOverflowError';
  readonly code: number = 0x1774; // 6004
  constructor(program: Program, cause?: Error) {
    super('Numerical overflow error', program, cause);
  }
}
codeToErrorMap.set(0x1774, CmNumericalOverflowErrorError);
nameToErrorMap.set('NumericalOverflowError', CmNumericalOverflowErrorError);

/**
 * TooManyCreators: 'Can only provide up to 4 creators to candy machine (because candy machine is one)'
 * @category Errors
 */
export class CmTooManyCreatorsError extends ProgramError {
  readonly name: string = 'TooManyCreators';
  readonly code: number = 0x1775; // 6005
  constructor(program: Program, cause?: Error) {
    super(
      'Can only provide up to 4 creators to candy machine (because candy machine is one)',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1775, CmTooManyCreatorsError);
nameToErrorMap.set('TooManyCreators', CmTooManyCreatorsError);

/**
 * CandyMachineEmpty: 'Candy machine is empty'
 * @category Errors
 */
export class CmCandyMachineEmptyError extends ProgramError {
  readonly name: string = 'CandyMachineEmpty';
  readonly code: number = 0x1776; // 6006
  constructor(program: Program, cause?: Error) {
    super('Candy machine is empty', program, cause);
  }
}
codeToErrorMap.set(0x1776, CmCandyMachineEmptyError);
nameToErrorMap.set('CandyMachineEmpty', CmCandyMachineEmptyError);

/**
 * HiddenSettingsDoNotHaveConfigLines: 'Candy machines using hidden uris do not have config lines, they have a single hash representing hashed order'
 * @category Errors
 */
export class CmHiddenSettingsDoNotHaveConfigLinesError extends ProgramError {
  readonly name: string = 'HiddenSettingsDoNotHaveConfigLines';
  readonly code: number = 0x1777; // 6007
  constructor(program: Program, cause?: Error) {
    super(
      'Candy machines using hidden uris do not have config lines, they have a single hash representing hashed order',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1777, CmHiddenSettingsDoNotHaveConfigLinesError);
nameToErrorMap.set(
  'HiddenSettingsDoNotHaveConfigLines',
  CmHiddenSettingsDoNotHaveConfigLinesError
);

/**
 * CannotChangeNumberOfLines: 'Cannot change number of lines unless is a hidden config'
 * @category Errors
 */
export class CmCannotChangeNumberOfLinesError extends ProgramError {
  readonly name: string = 'CannotChangeNumberOfLines';
  readonly code: number = 0x1778; // 6008
  constructor(program: Program, cause?: Error) {
    super(
      'Cannot change number of lines unless is a hidden config',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1778, CmCannotChangeNumberOfLinesError);
nameToErrorMap.set(
  'CannotChangeNumberOfLines',
  CmCannotChangeNumberOfLinesError
);

/**
 * CannotSwitchToHiddenSettings: 'Cannot switch to hidden settings after items available is greater than 0'
 * @category Errors
 */
export class CmCannotSwitchToHiddenSettingsError extends ProgramError {
  readonly name: string = 'CannotSwitchToHiddenSettings';
  readonly code: number = 0x1779; // 6009
  constructor(program: Program, cause?: Error) {
    super(
      'Cannot switch to hidden settings after items available is greater than 0',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1779, CmCannotSwitchToHiddenSettingsError);
nameToErrorMap.set(
  'CannotSwitchToHiddenSettings',
  CmCannotSwitchToHiddenSettingsError
);

/**
 * IncorrectCollectionAuthority: 'Incorrect collection NFT authority'
 * @category Errors
 */
export class CmIncorrectCollectionAuthorityError extends ProgramError {
  readonly name: string = 'IncorrectCollectionAuthority';
  readonly code: number = 0x177a; // 6010
  constructor(program: Program, cause?: Error) {
    super('Incorrect collection NFT authority', program, cause);
  }
}
codeToErrorMap.set(0x177a, CmIncorrectCollectionAuthorityError);
nameToErrorMap.set(
  'IncorrectCollectionAuthority',
  CmIncorrectCollectionAuthorityError
);

/**
 * MetadataAccountMustBeEmpty: 'The metadata account has data in it, and this must be empty to mint a new NFT'
 * @category Errors
 */
export class CmMetadataAccountMustBeEmptyError extends ProgramError {
  readonly name: string = 'MetadataAccountMustBeEmpty';
  readonly code: number = 0x177b; // 6011
  constructor(program: Program, cause?: Error) {
    super(
      'The metadata account has data in it, and this must be empty to mint a new NFT',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x177b, CmMetadataAccountMustBeEmptyError);
nameToErrorMap.set(
  'MetadataAccountMustBeEmpty',
  CmMetadataAccountMustBeEmptyError
);

/**
 * NoChangingCollectionDuringMint: 'Can't change collection settings after items have begun to be minted'
 * @category Errors
 */
export class CmNoChangingCollectionDuringMintError extends ProgramError {
  readonly name: string = 'NoChangingCollectionDuringMint';
  readonly code: number = 0x177c; // 6012
  constructor(program: Program, cause?: Error) {
    super(
      "Can't change collection settings after items have begun to be minted",
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x177c, CmNoChangingCollectionDuringMintError);
nameToErrorMap.set(
  'NoChangingCollectionDuringMint',
  CmNoChangingCollectionDuringMintError
);

/**
 * ExceededLengthError: 'Value longer than expected maximum value'
 * @category Errors
 */
export class CmExceededLengthErrorError extends ProgramError {
  readonly name: string = 'ExceededLengthError';
  readonly code: number = 0x177d; // 6013
  constructor(program: Program, cause?: Error) {
    super('Value longer than expected maximum value', program, cause);
  }
}
codeToErrorMap.set(0x177d, CmExceededLengthErrorError);
nameToErrorMap.set('ExceededLengthError', CmExceededLengthErrorError);

/**
 * MissingConfigLinesSettings: 'Missing config lines settings'
 * @category Errors
 */
export class CmMissingConfigLinesSettingsError extends ProgramError {
  readonly name: string = 'MissingConfigLinesSettings';
  readonly code: number = 0x177e; // 6014
  constructor(program: Program, cause?: Error) {
    super('Missing config lines settings', program, cause);
  }
}
codeToErrorMap.set(0x177e, CmMissingConfigLinesSettingsError);
nameToErrorMap.set(
  'MissingConfigLinesSettings',
  CmMissingConfigLinesSettingsError
);

/**
 * CannotIncreaseLength: 'Cannot increase the length in config lines settings'
 * @category Errors
 */
export class CmCannotIncreaseLengthError extends ProgramError {
  readonly name: string = 'CannotIncreaseLength';
  readonly code: number = 0x177f; // 6015
  constructor(program: Program, cause?: Error) {
    super(
      'Cannot increase the length in config lines settings',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x177f, CmCannotIncreaseLengthError);
nameToErrorMap.set('CannotIncreaseLength', CmCannotIncreaseLengthError);

/**
 * CannotSwitchFromHiddenSettings: 'Cannot switch from hidden settings'
 * @category Errors
 */
export class CmCannotSwitchFromHiddenSettingsError extends ProgramError {
  readonly name: string = 'CannotSwitchFromHiddenSettings';
  readonly code: number = 0x1780; // 6016
  constructor(program: Program, cause?: Error) {
    super('Cannot switch from hidden settings', program, cause);
  }
}
codeToErrorMap.set(0x1780, CmCannotSwitchFromHiddenSettingsError);
nameToErrorMap.set(
  'CannotSwitchFromHiddenSettings',
  CmCannotSwitchFromHiddenSettingsError
);

/**
 * CannotChangeSequentialIndexGeneration: 'Cannot change sequential index generation after items have begun to be minted'
 * @category Errors
 */
export class CmCannotChangeSequentialIndexGenerationError extends ProgramError {
  readonly name: string = 'CannotChangeSequentialIndexGeneration';
  readonly code: number = 0x1781; // 6017
  constructor(program: Program, cause?: Error) {
    super(
      'Cannot change sequential index generation after items have begun to be minted',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1781, CmCannotChangeSequentialIndexGenerationError);
nameToErrorMap.set(
  'CannotChangeSequentialIndexGeneration',
  CmCannotChangeSequentialIndexGenerationError
);

/**
 * CollectionKeyMismatch: 'Collection public key mismatch'
 * @category Errors
 */
export class CmCollectionKeyMismatchError extends ProgramError {
  readonly name: string = 'CollectionKeyMismatch';
  readonly code: number = 0x1782; // 6018
  constructor(program: Program, cause?: Error) {
    super('Collection public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x1782, CmCollectionKeyMismatchError);
nameToErrorMap.set('CollectionKeyMismatch', CmCollectionKeyMismatchError);

/**
 * CouldNotRetrieveConfigLineData: 'Could not retrive config line data'
 * @category Errors
 */
export class CmCouldNotRetrieveConfigLineDataError extends ProgramError {
  readonly name: string = 'CouldNotRetrieveConfigLineData';
  readonly code: number = 0x1783; // 6019
  constructor(program: Program, cause?: Error) {
    super('Could not retrive config line data', program, cause);
  }
}
codeToErrorMap.set(0x1783, CmCouldNotRetrieveConfigLineDataError);
nameToErrorMap.set(
  'CouldNotRetrieveConfigLineData',
  CmCouldNotRetrieveConfigLineDataError
);

/**
 * NotFullyLoaded: 'Not all config lines were added to the candy machine'
 * @category Errors
 */
export class CmNotFullyLoadedError extends ProgramError {
  readonly name: string = 'NotFullyLoaded';
  readonly code: number = 0x1784; // 6020
  constructor(program: Program, cause?: Error) {
    super(
      'Not all config lines were added to the candy machine',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1784, CmNotFullyLoadedError);
nameToErrorMap.set('NotFullyLoaded', CmNotFullyLoadedError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplCandyMachineCoreErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplCandyMachineCoreErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
