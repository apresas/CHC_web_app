import React from "react";
import "./awards.css";
import AwardItem from "./AwardItem";
import AllDivison from "./AllDivision";
import TitleBar from "../TitleBar";
import playerAwards from "../../data/playerAwards.json"

function Awards() {
  return (
    <div className="awards_container">
      <div className="awards_content_container">
        {/* <div className="awards_title">
        <h1>All League Awards</h1>
        <h3>2023-2024</h3>
        </div> */}
        <TitleBar title="All League Awards" subtitle="2023-2024"/>
        {/* <div className="title_bar"></div> */}
        <h2>First Team</h2>
        <div className="first_team_container">
          {playerAwards.filter((data) => data.category === "firstTeam").map((data) => (
            <AwardItem key={data.playerID} player={data}/>
          ))
          }
        </div>
        <h2>Second Team</h2>
        <div className="second_team_container">
        {playerAwards.filter((data) => data.category === "secondTeam").map((data) => (
            <AwardItem key={data.playerID} player={data}/>
          ))
          }
        </div>
        <h2>All Division Team</h2>
        <div className="all_league_container">
          {/* {playerAwards.filter((data) => data.category === "allDivision" && data.division === "Red").map((data) => (
                      <AllDivison key={data.playerID} player={data}/>
          ))} */}
          <AllDivison division="RED"/>
          <AllDivison division="WHITE"/>
          <AllDivison division="BLUE"/>
        </div>
        <h2>Honorable Mentions</h2>
        <div className="honorable_mention_container"></div>
      </div>
    </div>
  );
}

export default Awards;
