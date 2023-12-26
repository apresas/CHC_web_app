import "../App.css";
import TeamTiles from "../components/TeamTiles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LeagueLeaders from "../components/LeagueLeaders";

function Home() {
  return (
    <>
    <div className="nav_container">
      <NavBar />
    </div>
    <div className="app_container">
      <TeamTiles />
      <LeagueLeaders />
      <Footer />
    </div>
  </>
  )
}

export default Home