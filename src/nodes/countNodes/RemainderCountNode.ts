export interface RemainderCountNode {
  readonly kind: 'remainderCountNode';
}

export function remainderCountNode(): RemainderCountNode {
  return { kind: 'remainderCountNode' };
}
