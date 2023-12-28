
import "./App.css";

import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import StatsLeader from "./pages/StatsLeader";
import Schedule from "./pages/Schdule";
import LeagueInfo from "./pages/LeagueInfo";
import Rankings from "./pages/Rankings";
import PostSeason from "./pages/PostSeason";
import PlayerAwards from "./pages/PlayerAwards";
import AllstarGame from "./pages/AllstarGame";
import History from "./pages/LeagueHistory";
import Archieve from "./pages/Archieve";
import Links from "./pages/Links";
import About from "./pages/About";
import { useSite } from "./context/SiteContext";

function App() {
  const {
    currentTeam,
    setCurrentTeam,
    setRosterTeam,
    rosterTeam,
    setCurrentPlayer,
    currentPlayer,
  }= useSite();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home  setCurrentTeam={setCurrentTeam} setRosterTeam={setRosterTeam} rosterTeam={rosterTeam}/>} />
        <Route path="/team/:id" element={<TeamPage currentTeam={currentTeam} rosterTeam={rosterTeam} setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} />} />
        <Route path="/stats" elememt={<StatsLeader/>} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/info" element={<LeagueInfo />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/postseason" element={<PostSeason />} />
        <Route path="/awards" element={<PlayerAwards />} />
        <Route path="/allstar" element={<AllstarGame />} />
        <Route path="/history" element={<History/>} />
        <Route path="/archive" element={<Archieve />} />
        <Route path="/links" element={<Links />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
