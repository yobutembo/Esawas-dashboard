import React from "react";

const ParamList = ({ params }) => {
  return (
    <div className="shadow-md w-1/4 p-4">
      <h2 className="text-xl font-bold">Parameters</h2>
      <div className=" space-y-1 p-4  overflow-y-scroll h-[100px] w-full">
        {params.map((param) => (
          <div key={param} className=" pl-4 bg-gray-100">
            {param}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParamList;