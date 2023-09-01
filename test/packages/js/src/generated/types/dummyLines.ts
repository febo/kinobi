/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Serializer,
  array,
  struct,
} from '@metaplex-foundation/umi/serializers';
import { ConfigLine, ConfigLineArgs, getConfigLineSerializer } from '.';

/** Dummy lines. */
export type DummyLines = {
  /** The dummy lines. */
  lines: Array<ConfigLine>;
};

export type DummyLinesArgs = {
  /** The dummy lines. */
  lines: Array<ConfigLineArgs>;
};

export function getDummyLinesSerializer(): Serializer<
  DummyLinesArgs,
  DummyLines
> {
  return struct<DummyLines>(
    [['lines', array(getConfigLineSerializer(), { size: 'remainder' })]],
    { description: 'DummyLines' }
  ) as Serializer<DummyLinesArgs, DummyLines>;
}