import React, { useState, useEffect } from "react";
import AllDivisionItem from "./AllDivisionItem";
import "./AllDivision.css";
import playerAward from "../../data/playerAwards.json";

function AllDivision({ division }) {
  const [headerColor, setHeaderColor] = useState();
  const [divisionTitle, setDivisionTitle] = useState();
  useEffect(() => {
    if (division === "RED") {
      setHeaderColor("#ff0000");
      setDivisionTitle("Red")
      // getAwardPlayers();
    }
    if (division === "WHITE") {
      setHeaderColor("#d3d3d3");
      setDivisionTitle("White")
      // getAwardPlayers();
    }
    if (division === "BLUE") {
      setHeaderColor("#0000ff");
      setDivisionTitle("Blue")
      // getAwardPlayers();
    }
  }, [division]);

  return (
    <div className="all_division_container">
      <div
        className="all_division_header"
        style={{ backgroundColor: `${headerColor}` }}
      >
        <h2>1st Team</h2>
        <h3>All-{`${divisionTitle}`} Division</h3>
      </div>
      <div className="all_division_body">
        {playerAward.filter((data) => data.category === "allDivision").filter((data) => data.division === "red").map((data) =>{
            console.log(data)
        })}
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
        <AllDivisionItem />
      </div>
    </div>
  );
}

export default AllDivision;
