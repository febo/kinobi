import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';

export type CreateReservationListInstructionData = { discriminator: number };

export type CreateReservationListInstructionDataArgs = {};

export function getCreateReservationListInstructionDataEncoder(): Encoder<CreateReservationListInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 42 })
  );
}

export function getCreateReservationListInstructionDataDecoder(): Decoder<CreateReservationListInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getCreateReservationListInstructionDataCodec(): Codec<
  CreateReservationListInstructionDataArgs,
  CreateReservationListInstructionData
> {
  return combineCodec(
    getCreateReservationListInstructionDataEncoder(),
    getCreateReservationListInstructionDataDecoder()
  );
}
