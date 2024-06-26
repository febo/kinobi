import { AccountNode } from '../../../nodes';
import { TypeManifest } from '../TypeManifest';
import type { GlobalFragmentScope } from '../getRenderMapVisitor';
import { Fragment, fragment, fragmentFromTemplate } from './common';

export function getAccountFetchHelpersFragment(
  scope: Pick<GlobalFragmentScope, 'nameApi' | 'customAccountData'> & {
    accountNode: AccountNode;
    typeManifest: TypeManifest;
  }
): Fragment {
  const { accountNode, typeManifest, nameApi, customAccountData } = scope;
  const hasCustomData = customAccountData.has(accountNode.name);
  const accountTypeFragment = hasCustomData
    ? typeManifest.strictType.clone()
    : fragment(nameApi.dataType(accountNode.name));
  const decoderFunctionFragment = hasCustomData
    ? typeManifest.decoder.clone()
    : fragment(`${nameApi.decoderFunction(accountNode.name)}()`);

  return fragmentFromTemplate('accountFetchHelpers.njk', {
    decoderFunction: decoderFunctionFragment.render,
    accountType: accountTypeFragment.render,
    decodeFunction: nameApi.accountDecodeFunction(accountNode.name),
    fetchFunction: nameApi.accountFetchFunction(accountNode.name),
    fetchMaybeFunction: nameApi.accountFetchMaybeFunction(accountNode.name),
    fetchAllFunction: nameApi.accountFetchAllFunction(accountNode.name),
    fetchAllMaybeFunction: nameApi.accountFetchAllMaybeFunction(
      accountNode.name
    ),
  })
    .mergeImportsWith(accountTypeFragment, decoderFunctionFragment)
    .addImports('solanaAddresses', ['Address'])
    .addImports('solanaAccounts', [
      'Account',
      'assertAccountExists',
      'assertAccountsExist',
      'decodeAccount',
      'EncodedAccount',
      'fetchEncodedAccount',
      'fetchEncodedAccounts',
      'FetchAccountConfig',
      'FetchAccountsConfig',
      'MaybeAccount',
      'MaybeEncodedAccount',
    ]);
}
