import React from "react";

const GroupList = ({ groups }) => {
  return (
    <div className="shadow-md w-1/4 p-4">
      <h2 className="text-xl font-bold">Groups</h2>
      <div className=" space-y-1 p-4  overflow-y-scroll h-[100px] w-full">
        {groups.map((group) => (
          <div key={group} className=" pl-4 bg-gray-100">
            {group}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupList;
