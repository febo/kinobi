import test from 'ava';
import {
  MainCaseString,
  accountNode,
  assertIsNode,
  constantPdaSeedNodeFromString,
  numberTypeNode,
  pdaLinkNode,
  pdaNode,
  programNode,
  resolveNestedTypeNode,
  rootNode,
  structFieldTypeNode,
  structTypeNode,
  updateAccountsVisitor,
  visit,
} from '../../src';

test('it updates the name of an account', (t) => {
  // Given the following program node with one account.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
  });

  // When we update the name of that account.
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: { name: 'myNewAccount' },
    })
  );

  // Then we expect the following tree changes.
  assertIsNode(result, 'programNode');
  t.is(result.accounts[0].name, 'myNewAccount' as MainCaseString);

  // But the idl name should not be changed.
  t.is(result.accounts[0].idlName, 'myAccount');
});

test('it updates the name of an account within a specific program', (t) => {
  // Given two programs each with an account of the same name.
  const node = rootNode(
    programNode({
      name: 'myProgramA',
      publicKey: '1111',
      accounts: [accountNode({ name: 'candyMachine' })],
    }),
    [
      programNode({
        name: 'myProgramB',
        publicKey: '2222',
        accounts: [accountNode({ name: 'candyMachine' })],
      }),
    ]
  );

  // When we update the name of that account in the first program.
  const result = visit(
    node,
    updateAccountsVisitor({
      'myProgramA.candyMachine': { name: 'newCandyMachine' },
    })
  );

  // Then we expect the first account to have been renamed.
  assertIsNode(result, 'rootNode');
  t.is(result.program.accounts[0].name, 'newCandyMachine' as MainCaseString);

  // But not the second account.
  t.is(
    result.additionalPrograms[0].accounts[0].name,
    'candyMachine' as MainCaseString
  );
});

test("it renames the fields of an account's data", (t) => {
  // Given the following account.
  const node = accountNode({
    name: 'myAccount',
    data: structTypeNode([
      structFieldTypeNode({ name: 'myData', type: numberTypeNode('u32') }),
    ]),
  });

  // When we rename its data fields.
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: {
        data: { myData: 'myNewData' },
      },
    })
  );

  // Then we expect the following tree changes.
  assertIsNode(result, 'accountNode');
  const data = resolveNestedTypeNode(result.data);
  t.is(data.fields[0].name, 'myNewData' as MainCaseString);
});

test('it updates the name of associated PDA nodes', (t) => {
  // Given the following program node with one account
  // and PDA accounts such that one of them is named the same.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
    pdas: [pdaNode('myAccount', []), pdaNode('myOtherAccount', [])],
  });

  // When we update the name of that account.
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: { name: 'myNewAccount' },
    })
  );

  // Then we expect the associated PDA node to have been renamed.
  assertIsNode(result, 'programNode');
  t.is(result.pdas[0].name, 'myNewAccount' as MainCaseString);

  // But not the other PDA node.
  t.is(result.pdas[1].name, 'myOtherAccount' as MainCaseString);
});

test('it creates a new PDA node when providing seeds to an account with no linked PDA', (t) => {
  // Given the following program node with one account.
  const node = rootNode(
    programNode({
      name: 'myProgramA',
      publicKey: '1111',
      accounts: [accountNode({ name: 'myAccount' })],
      pdas: [],
    }),
    [programNode({ name: 'myProgramB', publicKey: '2222' })]
  );

  // When we update the account with PDA seeds.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: { seeds },
    })
  );
  assertIsNode(result, 'rootNode');

  // Then we expect a new PDA node to have been created on the program.
  t.is(result.program.pdas.length, 1);
  t.is(result.additionalPrograms[0].pdas.length, 0);
  t.deepEqual(result.program.pdas[0], pdaNode('myAccount', seeds));

  // And the account now links to the new PDA node.
  t.deepEqual(result.program.accounts[0].pda, pdaLinkNode('myAccount'));
});

test('it updates the PDA node when the updated account name matches an existing PDA node', (t) => {
  // Given an account node and a PDA node with the same name
  // such that the account is not linked to the PDA.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
    pdas: [pdaNode('myAccount', [])],
  });

  // When we update the account with PDA seeds.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: { seeds },
    })
  );
  assertIsNode(result, 'programNode');

  // Then we expect the PDA node with the same name to have been updated.
  t.is(result.pdas.length, 1);
  t.deepEqual(result.pdas[0], pdaNode('myAccount', seeds));

  // And the account now links to this PDA node.
  t.deepEqual(result.accounts[0].pda, pdaLinkNode('myAccount'));
});

test('it updates the PDA node with the provided seeds when an account is linked to a PDA', (t) => {
  // Given an account node and a PDA node with a different name
  // such that the account is linked to the PDA.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount', pda: pdaLinkNode('myPda') })],
    pdas: [pdaNode('myPda', [])],
  });

  // When we update the account with PDA seeds.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: { seeds },
    })
  );
  assertIsNode(result, 'programNode');

  // Then we expect the linked PDA node to have been updated.
  t.is(result.pdas.length, 1);
  t.deepEqual(result.pdas[0], pdaNode('myPda', seeds));

  // And the account still links to the PDA node.
  t.deepEqual(result.accounts[0].pda, pdaLinkNode('myPda'));
});

test('it creates a new PDA node when updating an account with seeds and a new linked PDA that does not exist', (t) => {
  // Given an account node with no linked PDA.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
  });

  // When we update the account with PDA seeds and a new linked PDA node.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: {
        pda: pdaLinkNode('myPda'),
        seeds,
      },
    })
  );
  assertIsNode(result, 'programNode');

  // Then we expect the linked PDA node to have been created.
  t.is(result.pdas.length, 1);
  t.deepEqual(result.pdas[0], pdaNode('myPda', seeds));

  // And the account now links to the PDA node.
  t.deepEqual(result.accounts[0].pda, pdaLinkNode('myPda'));
});

test('it updates a PDA node when updating an account with seeds and a new linked PDA that exists', (t) => {
  // Given an account node with no linked PDA and an existing PDA node.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
    pdas: [pdaNode('myPda', [])],
  });

  // When we update the account with PDA seeds and a linked PDA node that points to the existing PDA.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: {
        pda: pdaLinkNode('myPda'),
        seeds,
      },
    })
  );
  assertIsNode(result, 'programNode');

  // Then we expect the existing PDA node to have been updated.
  t.is(result.pdas.length, 1);
  t.deepEqual(result.pdas[0], pdaNode('myPda', seeds));

  // And the account now links to this PDA node.
  t.deepEqual(result.accounts[0].pda, pdaLinkNode('myPda'));
});

test('it can update the seeds and name of an account at the same time', (t) => {
  // Given an account node with no linked PDA.
  const node = programNode({
    name: 'myProgram',
    publicKey: '1111',
    accounts: [accountNode({ name: 'myAccount' })],
  });

  // When we update the name and seeds of the account.
  const seeds = [constantPdaSeedNodeFromString('utf8', 'myAccount')];
  const result = visit(
    node,
    updateAccountsVisitor({
      myAccount: {
        name: 'myNewAccount',
        seeds,
      },
    })
  );
  assertIsNode(result, 'programNode');

  // Then we expect the account name to have been updated.
  t.is(result.accounts[0].name, 'myNewAccount' as MainCaseString);

  // And a new PDA node to have been created with that new name and the provided seeds.
  t.is(result.pdas.length, 1);
  t.deepEqual(result.pdas[0], pdaNode('myNewAccount', seeds));

  // And the account to now link to the PDA node.
  t.deepEqual(result.accounts[0].pda, pdaLinkNode('myNewAccount'));
});
