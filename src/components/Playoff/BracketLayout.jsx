import React from "react";
import Matchup from "./Matchup";
import "./bracketLayout.css";
import ChampionshipTile from "./ChampionshipTile";
import TitleBar from "../TitleBar";

function BracketLayout() {
  return (
    <>
      {/* <div className="bracket_header">
        <h1>Blue Jackets Cup 2023-2024</h1>
      </div> */}
      <TitleBar title="Blue Jackets Cup 2023-24"/>
      <div className="bracket_container">
        {/* <BracketGroup /> */}
        <div className="first_round">
          <div className="connector_1">
            <span />
          </div>
          <div className="matchup_1">
            <Matchup gameID={0} homeTeamID={9} awayTeamID={6} />
          </div>
          <div className="matchup_2">
            <Matchup gameID={1} homeTeamID={12} awayTeamID={0} />
          </div>
          <div className="connector_2">
            <span />
          </div>
          <div className="matchup_3">
            <Matchup gameID={2} homeTeamID={8} awayTeamID={7} />
          </div>
          <div className="matchup_4" gameID={4}>
            <Matchup gameID={3} homeTeamID={14} awayTeamID={3} />
          </div>
        </div>
        <div className="semi_finals">
          <div className="connector_3">
            <span />
          </div>
          <div className="matchup_5">
            <Matchup gameID={4} homeTeamID={9} awayTeamID={12} />
          </div>
          <div className="matchup_6">
            <Matchup gameID={5} homeTeamID={8} awayTeamID={3} />
          </div>
        </div>
        <div className="division_finals">
          <div className="connector_4">
            <span />
          </div>
          <div className="matchup_7">
            <Matchup gameID={6} homeTeamID={9} awayTeamID={8} />
          </div>
        </div>
        <ChampionshipTile id={9}/>
        {/* <div className="champions" id={9}>
          <div className="champions_item">
            <h2>Blue Jackets Cup</h2>
            <h2>Champions</h2>
            <div className="champion_logo_container">
              <img src="../../src/assets/Logos/Olentangy_logo.svg" alt="logo" />
            </div>
            <h3>Olentangy Braves</h3>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default BracketLayout;
