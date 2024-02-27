import React, { useState, useEffect } from "react";

const API = {
  testnet:
    "https://zetachain-testnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
  mainnet:
    "https://zetachain-mainnet-archive.allthatnode.com:1317/cosmos/gov/v1/proposals",
};

const GovUpgradeProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("testnet");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(API[activeTab]);
        const data = await response.json();
        const softwareUpgradeProposals = data.proposals
          .filter((proposal) => proposal.status === "PROPOSAL_STATUS_PASSED")
          .map((proposal) => ({
            ...proposal,
            plan:
              proposal.messages.find((msg) =>
                msg["@type"].includes("MsgSoftwareUpgrade")
              )?.plan || {},
          }))
          .filter((proposal) => proposal.plan.name)
          .sort((a, b) => b.plan.height - a.plan.height);

        setProposals(softwareUpgradeProposals);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  const inactiveStyle = { fontWeight: "normal", textDecoration: "none" };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button
          style={activeTab === "testnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("testnet")}
        >
          Testnet
        </button>
        <button
          style={activeTab === "mainnet" ? activeStyle : inactiveStyle}
          onClick={() => setActiveTab("mainnet")}
        >
          Mainnet Beta
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ZetaChain Version</th>
              <th>Upgrade Height</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index}>
                <td>{proposal.plan.name}</td>
                <td>{proposal.plan.height}</td>
                <td>
                  <a
                    href={proposal.plan.info}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proposal.plan.info}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GovUpgradeProposals;