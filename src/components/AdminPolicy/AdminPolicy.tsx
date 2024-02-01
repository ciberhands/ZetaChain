import React, { useEffect, useState } from "react";

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const API: any = {
  testnet: "https://zetachain-athens.blockpi.network/lcd/v1/public",
  mainnet: "https://zetachain.blockpi.network/lcd/v1/public",
};

const AdminPolicy = () => {
  const [adminPolicies, setAdminPolicies] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<any>("testnet");

  useEffect(() => {
    setAdminPolicies([]);
    const baseUrl = API[activeTab];
    fetch(`${baseUrl}/zeta-chain/observer/params`)
      .then((response) => response.json())
      .then((data) => {
        const policies = data.params.admin_policy;
        policies.forEach((policy: any) => {
          fetch(
            `${baseUrl}/cosmos/group/v1/group_policy_info/${policy.address}`
          )
            .then((response) => response.json())
            .then((detailData) => {
              fetch(
                `https://zetachain-athens.blockpi.network/lcd/v1/public/cosmos/group/v1/group_members/${detailData.info.group_id}`
              )
                .then((response) => response.json())
                .then((membersData) => {
                  setAdminPolicies((prevPolicies) => [
                    ...prevPolicies,
                    {
                      ...detailData.info,
                      created_at: formatDate(detailData.info.created_at),
                      policy_type: capitalizeFirstLetter(policy.policy_type),
                      members: membersData.members.map((m: any) => ({
                        ...m.member,
                        addedAt: formatDate(m.member.added_at),
                      })),
                      decision_policy: detailData.info.decision_policy,
                    },
                  ]);
                });
            });
        });
      })
      .catch((error) => {
        console.error("Error fetching admin policies:", error);
      });
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
      {adminPolicies.length > 0 ? (
        adminPolicies.map((policy: any, index) => (
          <div key={index}>
            <h2>Policy: {policy?.policy_type}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Address</td>
                  <td>{policy.address}</td>
                </tr>
                <tr>
                  <td>Admin</td>
                  <td>{policy.admin}</td>
                </tr>
                <tr>
                  <td>Created At</td>
                  <td>{policy.created_at}</td>
                </tr>
                <tr>
                  <td>Group ID</td>
                  <td>{policy.group_id}</td>
                </tr>
                <tr>
                  <td>Metadata</td>
                  <td>{policy.metadata}</td>
                </tr>
                <tr>
                  <td>Decision Policy Type</td>
                  <td>{policy.decision_policy["@type"].split("/").pop()}</td>
                </tr>
                <tr>
                  <td>Threshold</td>
                  <td>{policy.decision_policy.threshold}</td>
                </tr>
                <tr>
                  <td>Min Execution Period</td>
                  <td>{policy.decision_policy.windows.min_execution_period}</td>
                </tr>
                <tr>
                  <td>Voting Period</td>
                  <td>{policy.decision_policy.windows.voting_period}</td>
                </tr>
              </tbody>
            </table>
            <h3>Members</h3>
            <table>
              <thead>
                <tr>
                  <th>Added At</th>
                  <th>Address</th>
                  <th>Metadata</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {policy.members.map((member: any, memberIndex: number) => (
                  <tr key={memberIndex}>
                    <td>{member.addedAt}</td>
                    <td>{member.address}</td>
                    <td>{member.metadata}</td>
                    <td>{member.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>Loading admin policies...</p>
      )}
    </div>
  );
};

export default AdminPolicy;
