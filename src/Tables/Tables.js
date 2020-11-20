import React from "react";
import "./Tables.scss";
import { PremierLeagueTable } from "../PremierLeagueTable/PremierLeagueTable";

const className = "c-Tables";

const  Tables = () => {
  
  return (
    <div className={`${className}`}>
         <div className={`${className}__container`}>
        <PremierLeagueTable />
      </div>
      </div>
    )
}

export default Tables
