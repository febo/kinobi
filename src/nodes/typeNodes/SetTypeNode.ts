import type { IdlTypeSet } from '../../idl';
import type { Node } from '../Node';
import {
  SizeNode,
  fixedSizeNode,
  prefixedSizeNode,
  remainderSizeNode,
} from '../sizeNodes';
import { numberTypeNode } from './NumberTypeNode';
import { TypeNode, createTypeNodeFromIdl } from './TypeNode';

export type SetTypeNode = {
  readonly kind: 'setTypeNode';
  readonly child: TypeNode;
  readonly size: SizeNode;
  readonly idlSet: 'hashSet' | 'bTreeSet';
};

export function setTypeNode(
  child: TypeNode,
  options: {
    readonly size?: SetTypeNode['size'];
    readonly idlSet?: SetTypeNode['idlSet'];
  } = {}
): SetTypeNode {
  return {
    kind: 'setTypeNode',
    child,
    size: options.size ?? prefixedSizeNode(numberTypeNode('u32')),
    idlSet: options.idlSet ?? 'hashSet',
  };
}

export function setTypeNodeFromIdl(idl: IdlTypeSet): SetTypeNode {
  const child = 'hashSet' in idl ? idl.hashSet : idl.bTreeSet;
  let size: SetTypeNode['size'] | undefined;
  if (idl.size === 'remainder') {
    size = remainderSizeNode();
  } else if (typeof idl.size === 'number') {
    size = fixedSizeNode(idl.size);
  } else if (idl.size) {
    size = prefixedSizeNode(numberTypeNode(idl.size));
  }
  return setTypeNode(createTypeNodeFromIdl(child), {
    size,
    idlSet: 'hashSet' in idl ? 'hashSet' : 'bTreeSet',
  });
}

export function isSetTypeNode(node: Node | null): node is SetTypeNode {
  return !!node && node.kind === 'setTypeNode';
}

export function assertSetTypeNode(
  node: Node | null
): asserts node is SetTypeNode {
  if (!isSetTypeNode(node)) {
    throw new Error(`Expected setTypeNode, got ${node?.kind ?? 'null'}.`);
  }
}
