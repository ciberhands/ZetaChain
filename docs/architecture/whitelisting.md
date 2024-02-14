# Whitelisting ERC-20

## Overview

The community can propose fungible (ERC-20) tokens on Ethereum or other EVM
compatible chains connected by ZetaChain to be whitelisted. If whitelisted, such
ERC20 tokens can be managed by ZetaChain omnichain smart contract via a ZRC20
contract on ZetaChain’s EVM.

Note: The protocol has strict considerations for whitelisting tokens in order to
protect users of the Mainnet Beta network. These restrictions ensure
compatibility, performance, economic security, and overall system integrity. The
whitelisting process is necessary to prevent potential risks and vulnerabilities
associated with non-compliant or malicious tokens that can harm users and the
ecosystem. Any changes to the policies set out here or the protocol itself can
be proposed through governance.

## Background

The `zetacored` state maintains a list of whitelisted foreign fungible assets,
including ERC20 tokens on external chains in the `foreign_coins` construct. Each
of the `foreign_coin` is manageable by a ZRC20 contract on Zeta EVM.

By default all native gas assets on connected chains will be whitelisted. Other
fungible tokens need to be whitelisted.

The reason ZetaChain requires whitelisting process is because:

1. Compatibility: the ZetaChain system, by design, only works with _regular_
   ERC20 tokens, not arbitrary ones.
2. Performance: tracking unbounded number of token contracts cause performance
   issues.
3. Economic security: zombie tokens, infinite mints, economically unviable
   tokens may cause cascading problems on ZetaChain.
4. Security: ir*regular* ERC20 contracts may increase attack surface of
   ZetaChain system (re-entry, self-destruct, etc).

## Considerations for ERC20 contracts to be whitelisted

_Must_ means necessary conditions; _should_ means strong preference.

1. Must be ERC20 compliant and be _regular_ ERC20.
2. Must not rebase.
3. Must not have transfer fees.
4. Must not be involved in any scams.
5. Must be verified on Etherscan or equivalent explorers on other chain(s).
6. Must have a working product, utility, and an active community/userbase.
7. Must be audited.
8. Should be economically valuable/viable.
9. Should not be ERC777 or equivalent that can execute arbitrary code upon
   receiving funds.
10. Should have a proven track record without recent security, operational, or
    implementation issues.
11. Should have a source of initial liquidity.

## Procedure

First, a non-binding governance proposal that articulates the token and its
suitability (satisfaction of the above considerations) and benefits of
whitelisting the fungible token should be raised and passed.

Proposals that are passed will be reviewed, and if a decision is made to go
ahead with whitelisting the ERC20, according to the above requirements and
preferences as criteria, the protocol admin group 2 will sign a
`MsgWhitelistERC20` transaction and broadcast it. The ZetaChain network will do
the following procedure:

1. Deploy a ZRC20 contract on Zeta EVM to track and manage the foreign ERC20
   token;
2. Add an entry to the state variable viewable at
   `{IP}:1317/zeta-chain/fungible/foreign_coins`;
3. Whitelist the ERC20 contract address on the `ERC20Custody` contract on that
   external chain;

After these steps are done, the ERC20 whitelisting is finished. Liquidity for
the given asset should promptly begin deposits in order to provide a smooth
experience for users interested in interacting with the token.
