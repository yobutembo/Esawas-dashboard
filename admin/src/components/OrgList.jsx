import React from "react";

const OrgList = ({ orgs }) => {
  return (
    <div className="shadow-md w-1/4 p-4">
      <h2 className="text-xl font-bold">Organizations</h2>
      <div className=" space-y-1 p-4  overflow-y-scroll h-[100px] w-full">
        {orgs.map((org) => (
          <div key={org} className=" pl-4 bg-gray-100">
            {org}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgList;
