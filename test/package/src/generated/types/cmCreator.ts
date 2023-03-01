/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, PublicKey, Serializer } from '@metaplex-foundation/umi';

export type CmCreator = {
  /** Pubkey address */
  address: PublicKey;
  /** Whether the creator is verified or not */
  verified: boolean;
  percentageShare: number;
};

export type CmCreatorArgs = CmCreator;

export function getCmCreatorSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CmCreatorArgs, CmCreator> {
  const s = context.serializer;
  return s.struct<CmCreator>(
    [
      ['address', s.publicKey()],
      ['verified', s.bool()],
      ['percentageShare', s.u8()],
    ],
    { description: 'CmCreator' }
  ) as Serializer<CmCreatorArgs, CmCreator>;
}
