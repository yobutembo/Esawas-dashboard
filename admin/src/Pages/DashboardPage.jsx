import React, { useState } from "react";
import DynamicTable from "../components/DynamicTable";

const Dashboard = () => {
  const firstName = "Francis";
  const fullName = "Francis Lufwendo";
  const organization = "Ewasas";
  const country = "Zambia";
  const [showTooltip, setShowTooltip] = useState({
    card1: false,
    card2: false,
  });

  return (
    <div className="dashboard-container p-4 md:p-8 bg-blue-100 min-h-screen">
      {/* Welcome Heading */}
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">
        Welcome, {firstName}!
      </h2>

      {/* User Information Table */}
      <div className="user-info bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Your Information
        </h3>
        <table className="w-full text-left">
          <tbody>
            <tr className="border-b">
              <th className="p-2 text-gray-600">Fullname:</th>
              <td className="p-2">{fullName}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 text-gray-600">Organization:</th>
              <td className="p-2">{organization}</td>
            </tr>
            <tr>
              <th className="p-2 text-gray-600">Country:</th>
              <td className="p-2">{country}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Survey Links in Horizontal Cards */}
      <div className="survey-cards grid gap-4 md:grid-cols-2">
        {/* Card 1 with Tooltip */}
        <div
          className="relative card bg-white shadow-lg rounded-lg p-4 text-center hover:bg-blue-100 transition duration-200 ease-in-out"
          onMouseEnter={() => setShowTooltip({ ...showTooltip, card1: true })}
          onMouseLeave={() => setShowTooltip({ ...showTooltip, card1: false })}
        >
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Assessment 1
          </h4>
          <p className="text-gray-600 mb-4">
            Start the first Survey to share insights.
          </p>
          <a
            href="https://esawas-javascript-jrtzmvgmk-alinafes-projects.vercel.app"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Go to Assessment 1
          </a>

          {showTooltip.card1 && (
            <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-64 bg-blue-600 text-white text-sm rounded-lg shadow-lg p-3">
              The report presents a comprehensive assessment of Zambia’s data
              ecosystem maturity, particularly within NWASCO. The assessment
              provides an in-depth look at the data lifecycle, from collection
              to use, highlighting key areas.
            </div>
          )}
        </div>

        {/* Card 2 with Tooltip */}
        <div
          className="relative card bg-white shadow-lg rounded-lg p-4 text-center hover:bg-blue-100 transition duration-200 ease-in-out"
          onMouseEnter={() => setShowTooltip({ ...showTooltip, card2: true })}
          onMouseLeave={() => setShowTooltip({ ...showTooltip, card2: false })}
        >
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            Assessment 2
          </h4>
          <p className="text-gray-600 mb-4">
            Complete the second survey for more engagement.
          </p>
          <a
            href="https://esawas-javascript-jrtzmvgmk-alinafes-projects.vercel.app"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            Go to Assessment 2
          </a>

          {showTooltip.card2 && (
            <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-64 bg-blue-600 text-white text-sm rounded-lg shadow-lg p-3">
              The report presents a comprehensive assessment of Zambia’s data
              ecosystem maturity, particularly within NWASCO. The assessment
              provides an in-depth look at the data lifecycle, from collection
              to use, highlighting key areas.
            </div>
          )}
        </div>
      </div>
      <DynamicTable />
    </div>
  );
};

export default Dashboard;
