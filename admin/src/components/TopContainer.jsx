import React from "react";
import GroupList from "./GroupList";
import CountryList from "./CountryList";
import OrgList from "./OrgList";
import ParamList from "./ParamList";
import { countries } from "../constants";
import { parameters } from "../constants";
import { groups } from "../constants";
import { organizations } from "../constants";
import { surveyResponses } from "../data";

const TopContainer = () => {
  return (
    <div className="flex justify-between space-x-3 mx-6 bg-white px-6 py-6 rounded">
      <CountryList countries={countries} />
      <OrgList orgs={organizations} />
      <ParamList params={parameters} />
      <GroupList groups={groups} />
    </div>
  );
};

export default TopContainer;
