import React from "react";

const CountryList = ({ countries }) => {
  return (
    <div className="shadow-md w-1/4 p-4">
      <h2 className="text-xl font-bold">Country</h2>
      <div className=" space-y-1 p-4  overflow-y-scroll h-[100px] w-full">
        {countries.map((country) => (
          <div key={country} className=" pl-4 bg-gray-100">
            {country}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
