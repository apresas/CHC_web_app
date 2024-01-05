import React from "react";
import DropdownItem from "./DropdownItem";
import teamData from "../../data/teams.json";
import "./dropdown.css";

function DropdownMenu({ setDropdownTitle, setLogo }) {
  return (
    <ul className="dropdown_menu">
      <li>
        <DropdownItem
          name="All Teams"
          logo="../../src/assets/Logos/CHC_logo_V2.svg"
          setDropdownTitle={setDropdownTitle}
          setLogo={setLogo}
        />
      </li>
      {teamData.map((data) => (
        <li key={data.id}>
          <DropdownItem
            name={data.schoolName}
            logo={data.logo}
            setDropdownTitle={setDropdownTitle}
            setLogo={setLogo}
          />
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
