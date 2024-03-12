import { Node, NodeKind } from '../nodes';
import {
  NodeSelector,
  NodeStack,
  getConjunctiveNodeSelectorFunction,
  pipe,
} from '../shared';
import { identityVisitor } from './identityVisitor';
import { interceptVisitor } from './interceptVisitor';
import { recordNodeStackVisitor } from './recordNodeStackVisitor';
import { Visitor } from './visitor';

export type BottomUpNodeTransformer<TNode extends Node = Node> = (
  node: TNode,
  stack: NodeStack
) => Node | null;

export type BottomUpNodeTransformerWithSelector<TNode extends Node = Node> = {
  select: NodeSelector | NodeSelector[];
  transform: BottomUpNodeTransformer<TNode>;
};

export function bottomUpTransformerVisitor<
  TNodeKind extends NodeKind = NodeKind
>(
  transformers: (
    | BottomUpNodeTransformer
    | BottomUpNodeTransformerWithSelector
  )[],
  nodeKeys?: TNodeKind[]
): Visitor<Node | null, TNodeKind> {
  const transformerFunctions = transformers.map(
    (transformer): BottomUpNodeTransformer => {
      if (typeof transformer === 'function') return transformer;
      return (node, stack) =>
        getConjunctiveNodeSelectorFunction(transformer.select)(node, stack)
          ? transformer.transform(node, stack)
          : node;
    }
  );

  const stack = new NodeStack();
  return pipe(
    identityVisitor(nodeKeys),
    (v) => recordNodeStackVisitor(v, stack),
    (v) =>
      interceptVisitor(v, (node, next) =>
        transformerFunctions.reduce(
          (acc, transformer) =>
            acc === null ? null : transformer(acc, stack.clone()),
          next(node)
        )
      )
  );
}
