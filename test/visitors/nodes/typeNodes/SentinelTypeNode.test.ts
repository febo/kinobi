import test from 'ava';
import {
  constantValueNodeFromBytes,
  sentinelTypeNode,
  stringTypeNode,
} from '../../../../src';
import {
  deleteNodesVisitorMacro,
  getDebugStringVisitorMacro,
  identityVisitorMacro,
  mergeVisitorMacro,
} from '../_setup';

const node = sentinelTypeNode(
  stringTypeNode('utf8'),
  constantValueNodeFromBytes('base16', 'ffff')
);

test(mergeVisitorMacro, node, 5);
test(identityVisitorMacro, node);
test(deleteNodesVisitorMacro, node, '[sentinelTypeNode]', null);
test(deleteNodesVisitorMacro, node, '[stringTypeNode]', null);
test(deleteNodesVisitorMacro, node, '[constantValueNode]', null);
test(
  getDebugStringVisitorMacro,
  node,
  `
sentinelTypeNode
|   constantValueNode
|   |   bytesTypeNode
|   |   bytesValueNode [base16.ffff]
|   stringTypeNode [utf8]
`
);
