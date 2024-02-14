---
sidebar_position: 5
---

# Submit a Proposal

## Metadata JSON

Every proposal links to a metadata JSON file that contains proposal details,
such as title, summary and a list of authors. The metadata file can be uploaded
to IPFS or on the web. It is recommended that the metadata file contains the
following fields:

```json title="metadata.json"
{
  "title": "Important Proposal",
  "details": "Description of the proposal",
  "summary": "A short summary of the proposal",
  "authors": "ZetaChain Community",
  "proposal_forum_url": "https://example.org/forum"
}
```

## Submit a Proposal

After you've created a `proposal.json` and published `metadata.json` you can
submit the proposal:

```
zetacored tx gov submit-proposal proposal.json --from alice --node https://zetachain-athens.blockpi.network:443/rpc/v1/public --chain-id athens_7001-1
```

Some proposals (notably, software upgrades) may require higher amount of gas.
You can specify the gas amount using the gas flag: `--gas 400000`.

Confirm the transaction and wait for a transaction hash to be returned:

```yaml
txhash: C2133A95F0FDD76D618DFA70F2701E7DB6AE863C547D963E5B42B921DE3DD262
```

After a block is finalized (typically, 5-7 seconds), you can check that the
transaction has been successfully executed:

```
zetacored q tx C2133A95F0FDD76D618DFA70F2701E7DB6AE863C547D963E5B42B921DE3DD262 --node https://zetachain-athens.blockpi.network:443/rpc/v1/public
```

If the output contains `code: 0` the proposal has been successfully submitted.
In the output you can also find the proposal ID, which you can use to query the
proposal details.
