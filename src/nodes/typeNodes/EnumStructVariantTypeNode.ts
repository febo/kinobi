import type { NestedTypeNode } from './NestedTypeNode';
import type { IdlTypeEnumField, IdlTypeEnumVariant } from '../../idl';
import { InvalidKinobiTreeError, MainCaseString, mainCase } from '../../shared';
import { StructTypeNode, structTypeNodeFromIdl } from './StructTypeNode';

export interface EnumStructVariantTypeNode<
  TStruct extends
    NestedTypeNode<StructTypeNode> = NestedTypeNode<StructTypeNode>,
> {
  readonly kind: 'enumStructVariantTypeNode';

  // Children.
  readonly struct: TStruct;

  // Data.
  readonly name: MainCaseString;
  readonly discriminator?: number;
}

export function enumStructVariantTypeNode<
  TStruct extends NestedTypeNode<StructTypeNode>,
>(
  name: string,
  struct: TStruct,
  discriminator?: number
): EnumStructVariantTypeNode<TStruct> {
  if (!name) {
    throw new InvalidKinobiTreeError(
      'EnumStructVariantTypeNode must have a name.'
    );
  }
  return {
    kind: 'enumStructVariantTypeNode',
    name: mainCase(name),
    struct,
    discriminator,
  };
}

export function enumStructVariantTypeNodeFromIdl(
  idl: IdlTypeEnumVariant
): EnumStructVariantTypeNode<StructTypeNode> {
  const name = idl.name ?? '';
  return enumStructVariantTypeNode(
    name,
    structTypeNodeFromIdl({
      kind: 'struct',
      fields: idl.fields as IdlTypeEnumField[],
    })
  );
}
