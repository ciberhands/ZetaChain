---
sidebar_position: 2
---

# Text Proposal

Text proposal is a form of governance action that is submitted for
consideration, discussion, and voting. Unlike upgrade or parameter change
proposals, which directly modify the network's operation or protocol settings, a
text proposal does not have a direct effect on the blockchain's protocol.
Instead, it serves as a formal way to propose ideas, guidelines, intentions, or
recommendations that require community consensus before moving forward with
implementation or further action.

Create a proposal JSON file:

```json title="proposal.json"
{
  "messages": [
    {
      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",
      "authority": "zeta10d07y265gmmuvt4z0w9aw880jnsr700jvxasvr",
      "content": {
        "@type": "/cosmos.gov.v1beta1.TextProposal",
        "title": "Important Proposal",
        "description": "Description of the proposal"
      }
    }
  ],
  "deposit": "1000000azeta",
  "metadata": "https://example.org/metadata.json"
}
```

The proposal file contains an array of messages, a metadata URL, and a deposit
amount.

`messages` is an array of messages to be included in the proposal. As v1 of the
governance module does not have a dedicated message type for text proposals, the
`messages` can be empty. For compatibility with some explorers, however, we will
use the `MsgExecLegacyContent` message type to wrap
`/cosmos.gov.v1beta1.TextProposal`.

The `authority` field specifies the address of the entity executing the
proposal. Use the governance module address as the authority.

The `content` field contains the details of the proposal, including the title
and description.

`deposit` specifies the amount of tokens to be deposited with the proposal. If
the `deposit` amount is less than the minimum required deposit amount, the
proposal will enter the "deposit period" and will wait for required amount of
tokens to be deposited within the "max deposit period". Providing the min
deposit with the proposal will skip the deposit period and directly enter the
voting period.

`metadata`: A URL pointing to a JSON file containing the details of the
proposal.

Text proposals play an important role in decentralized decision-making
processes, allowing for a structured and democratic approach to proposing and
deliberating on the future direction of a blockchain network.
