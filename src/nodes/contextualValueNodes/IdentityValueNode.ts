export interface IdentityValueNode {
  readonly kind: 'identityValueNode';
}

export function identityValueNode(): IdentityValueNode {
  return { kind: 'identityValueNode' };
}
