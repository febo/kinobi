import test from 'ava';
import {
  definedTypeNode,
  numberTypeNode,
  postOffsetTypeNode,
  visit,
} from '../../../../src';
import { getRenderMapVisitor } from '../../../../src/renderers/js-experimental/getRenderMapVisitor';
import { renderMapContains, renderMapContainsImports } from '../_setup';

test('it renders relative post-offset codecs', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), 4),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: ({ postOffset }) => postOffset + 4 } )',
    'offsetDecoder( getU32Decoder() , { postOffset: ({ postOffset }) => postOffset + 4 } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});

test('it renders negative relative post-offset codecs', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), -4),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: ({ postOffset }) => postOffset - 4 } )',
    'offsetDecoder( getU32Decoder() , { postOffset: ({ postOffset }) => postOffset - 4 } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});

test('it renders absolute post-offset codecs', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), 4, 'absolute'),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: () => 4 } )',
    'offsetDecoder( getU32Decoder() , { postOffset: () => 4 } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});

test('it renders negative absolute post-offset codecs', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), -4, 'absolute'),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: ({ wrapBytes }) => wrapBytes(-4) } )',
    'offsetDecoder( getU32Decoder() , { postOffset: ({ wrapBytes }) => wrapBytes(-4) } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});

test('it renders padded post-offset codecs', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), 4, 'padded'),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'padRightEncoder( getU32Encoder() , 4 )',
    'padRightDecoder( getU32Decoder() , 4 )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['padRightEncoder', 'padRightDecoder'],
  });
});

test('it renders post-offset codecs relative to the pre-offset', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), 4, 'preOffset'),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: ({ preOffset }) => preOffset + 4 } )',
    'offsetDecoder( getU32Decoder() , { postOffset: ({ preOffset }) => preOffset + 4 } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});

test('it renders negative post-offset codecs relative to the pre-offset', (t) => {
  // Given the following node.
  const node = definedTypeNode({
    name: 'myType',
    type: postOffsetTypeNode(numberTypeNode('u32'), -4, 'preOffset'),
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following types and codecs to be exported.
  renderMapContains(t, renderMap, 'types/myType.ts', [
    'export type MyType = number',
    'offsetEncoder( getU32Encoder() , { postOffset: ({ preOffset }) => preOffset - 4 } )',
    'offsetDecoder( getU32Decoder() , { postOffset: ({ preOffset }) => preOffset - 4 } )',
  ]);

  // And we expect the following codec imports.
  renderMapContainsImports(t, renderMap, 'types/myType.ts', {
    '@solana/web3.js': ['offsetEncoder', 'offsetDecoder'],
  });
});
