import React, { useState } from "react";
import "./team.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PlayerItem from "./PlayerItem";
import rosterData from "../data/rosterData.json";
import PlayerModal from "../modal/PlayerModal"

function Team({ id, pageID, currentTeam, rosterTeam, setCurrentPlayer, currentPlayer }) {
  // console.log(rosterTeam);
  // const primary_color = "White"
  // const secondary_color = "#031327"
  const primary_color = rosterTeam.primaryColor;
  const secondary_color = rosterTeam.secondaryColor;
  const [openModal, setOpenModal] = useState(false);

  const checkCurrentPlayer = () => {
    setOpenModal(true);
    console.log(currentPlayer.stats)
  }

  const closeModal = () => {
    setOpenModal(false);
  }
  return (
    <>
    <PlayerModal
    open={openModal}
    currentPlayer={currentPlayer}
    onClose={closeModal}
    primaryColor={primary_color}
    secondaryColor={secondary_color}
    />
      <NavBar />
      <div className="team_container">
        <div className="team_content_container">
          {/* <div>TeamID: {id}</div> */}
          <div
            className="team_title_container"
            style={{
              backgroundColor: `${primary_color}`,
              color: `${secondary_color}`,
            }}
          >
            <img className="team_logo" src={currentTeam.logo} alt="" />
            <h1 className="school_title">{currentTeam.schoolName}</h1>
            <h3 className="team_title">{currentTeam.teamName}</h3>
          </div>
          {/* <h1 className="roster_title">Roster</h1> */}
          <div className="players_grid">
            <h2 className="grid_title">Forwards</h2>
            <div className="forwards_grid">
              {rosterTeam.roster
                .filter((roster) => roster.position === "F")
                .map((roster) => (
                  <PlayerItem roster={roster} setCurrentPlayer={setCurrentPlayer} checkCurrentPlayer={checkCurrentPlayer} currentPlayer={currentPlayer}/>
                ))}
            </div>
            <h2 className="grid_title">Defensemen</h2>
            <div className="defense_grid">
              {rosterTeam.roster
                .filter((roster) => roster.position === "D")
                .map((roster) => (
                  <PlayerItem roster={roster} setCurrentPlayer={setCurrentPlayer} checkCurrentPlayer={checkCurrentPlayer}/>
                ))}
            </div>
            <h2 className="grid_title">Goalies</h2>
            <div className="goalies_grid">
              {rosterTeam.roster
                .filter((roster) => roster.position === "G")
                .map((roster) => (
                  <PlayerItem roster={roster} setCurrentPlayer={setCurrentPlayer} checkCurrentPlayer={checkCurrentPlayer}/>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
