# Messages

## MsgDeployFungibleCoinZRC20

DeployFungibleCoinZRC20 deploys a fungible coin from a connected chains as a ZRC20 on ZetaChain.

If this is a gas coin, the following happens:

* ZRC20 contract for the coin is deployed
* contract address of ZRC20 is set as a token address in the system
contract
* ZETA tokens are minted and deposited into the module account
* setGasZetaPool is called on the system contract to add the information
about the pool to the system contract
* addLiquidityETH is called to add liquidity to the pool

If this is a non-gas coin, the following happens:

* ZRC20 contract for the coin is deployed
* The coin is added to the list of foreign coins in the module's state

Only the admin policy account is authorized to broadcast this message.

```proto
message MsgDeployFungibleCoinZRC20 {
	string creator = 1;
	string ERC20 = 2;
	int64 foreign_chain_id = 3;
	uint32 decimals = 4;
	string name = 5;
	string symbol = 6;
	common.CoinType coin_type = 7;
	int64 gas_limit = 8;
}
```

## MsgRemoveForeignCoin

RemoveForeignCoin removes a coin from the list of foreign coins in the module's state.

Only the admin policy account is authorized to broadcast this message.

```proto
message MsgRemoveForeignCoin {
	string creator = 1;
	string name = 2;
}
```

## MsgUpdateSystemContract

```proto
message MsgUpdateSystemContract {
	string creator = 1;
	string new_system_contract_address = 2;
}
```

## MsgUpdateZRC20WithdrawFee

```proto
message MsgUpdateZRC20WithdrawFee {
	string creator = 1;
	string zrc20_address = 2;
	string new_withdraw_fee = 6;
}
```

