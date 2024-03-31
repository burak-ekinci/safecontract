import React from "react";

const RoadMap = () => {
  return (
    <div class="container border rounded shadow">
      <div class="row">
        <div class="col text-center">
          <ul>
            <h2>Short Term</h2>
            <li>UI/UX Refinement</li>
            <li>User authentication via Internet Identity</li>
            <li>Multi-party contract capabilities</li>
            <li>Revision of the contract, date of amendment recording</li>
          </ul>
        </div>
        <div class="col text-center">
          <ul>
            <h2>Long Term</h2>
            <li>Token integration</li>
            <li>Tokenomics model</li>
            <li>Integration of KYC system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
