import React, { useState } from "react";
import "./teamTiles.css";
import Teams from "../data/teams.json";
import { FiChevronsDown } from "react-icons/fi";
import { GrStar } from "react-icons/gr";

function TeamTiles() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [statTableID, setStatTableID] = useState();
  const openStandings = (id) => {
    setOpen(!open)
    console.log(id);
    setStatTableID(id);
    // if (statTableID === 0) {
    //   setOpen(!open);
    //   console.log('red')
    // }
    // if (statTableID === 1) {
    //   setOpen1(!open);
    //   console.log('white')
    // }
    // if (statTableID === 2) {
    //   setOpen2(!open);
    //   console.log('blue')
    // }
  };

  return (
    <div className="teamTiles_container">
      <div className="teams_title_container">
        <h1 className="teams_tiles_title">CAPITAL HOCKEY CONFRENCE</h1>
        <h3 className="teams_tiles_sub">
          Central Ohio Varsity High School Hockey
        </h3>
      </div>
      <section className="divisions">
        <h2 className="divisions_title">Red Division</h2>
        <div className="star">
          <GrStar style={{ fontSize: "2rem" }} />
        </div>
        <div className="team_tiles red">
          {Teams.map((team) => {
            return team;
          })
            .filter((team) => team.division === "Red")
            .map((team) => {
              return (
                <div key={team.id} className="tiles">
                  <img className="team_image" src={team.logo} alt="logo" />
                  <h3 className="school_name_title">{team.schoolName}</h3>
                  <strong className="team_name_title">{team.teamName}</strong>
                  <small className="city_title">{team.city}</small>
                </div>
              );
            })}
        </div>
        <div
          href=""
          className="division_button"
          onClick={()=> openStandings(0)}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div> {open ? <div className="standings">Standings</div> : null}</div>
      </section>
      <section className="divisions">
        <h2 className="divisions_title">White Division</h2>
        <div className="star">
          <GrStar style={{ fontSize: "2rem" }} />
        </div>
        <div className="team_tiles white">
          {Teams.map((team) => {
            return team;
          })
            .filter((team) => team.division === "White")
            .map((team) => {
              return (
                <div key={team.id} className="tiles">
                  <img className="team_image" src={team.logo} alt="logo" />
                  <h3 className="school_name_title">{team.schoolName}</h3>
                  <strong className="team_name_title">{team.teamName}</strong>
                  <small className="city_title">{team.city}</small>
                </div>
              );
            })}
        </div>
        <div
          href=""
          className="division_button"
          onClick={()=> openStandings(1)}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div> {open ? <div className="standings">Standings</div> : null}</div>{" "}
      </section>
      <section className="divisions">
        <h2 className="divisions_title">Blue Division</h2>
        <div className="star">
          <GrStar style={{ fontSize: "2rem" }} />
        </div>
        <div className="team_tiles blue">
          {Teams.map((team) => {
            return team;
          })
            .filter((team) => team.division === "Blue")
            .map((team) => {
              return (
                <div key={team.id} className="tiles">
                  <img className="team_image" src={team.logo} alt="logo" />
                  <h3 className="school_name_title">{team.schoolName}</h3>
                  <strong className="team_name_title">{team.teamName}</strong>
                  <small className="city_title">{team.city}</small>
                </div>
              );
            })}
        </div>
        <div
          href=""
          className="division_button"
          onClick={()=> openStandings(2)}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div> {open ? <div className="standings">Standings</div> : null}</div>{" "}
      </section>
    </div>
  );
}

export default TeamTiles;
