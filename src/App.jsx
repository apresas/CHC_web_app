// import { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
import TeamTiles from "./components/TeamTiles";
import NavBar from "./components/NavBar";
// import StandingsTable from "./components/StandingsTable";
import Footer from "./components/Footer";
import LeagueLeaders from "./components/LeagueLeaders";

function App() {
  return (
    <>
      <div className="nav_container">
        {/* <Header /> */}
        <NavBar />
      </div>
      <div className="app_container">
        <TeamTiles />
        {/* <StandingsTable /> */}
        <LeagueLeaders />
        <Footer />
      </div>
    </>
  );
}

export default App;
