import { useState } from "react";
import "./teamTiles.css";
import Teams from "../data/teams.json";
import standings from "../data/standing.json";
import { FiChevronsDown } from "react-icons/fi";
import { GrStar } from "react-icons/gr";

function TeamTiles() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const openStandings = (id) => {
    if (id === 0) {
      setOpen(!open);
      console.log("red");
    } else if (id === 1) {
      setOpen1(!open1);
      console.log("white");
    } else if (id === 2) {
      setOpen2(!open2);
      console.log("blue");
    }
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
          onClick={() => {
            const id = 0;
            openStandings(id);
          }}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div>
          {" "}
          {open ? (
            <div className="standings">
              <h3 className="standing_title">Standings</h3>
              <table className="standings_table red">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>GP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                    <th>OTL</th>
                    <th className="points">P</th>
                    <th>W%</th>
                    <th>GF</th>
                    <th>GA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings
                    .map((stats) => {
                      return stats;
                    })
                    .filter((stats) => stats.divison === "Red")
                    .sort((a, b) =>
                      parseInt(a.points) > parseInt(b.points) ? -1 : 1
                    )
                    .map((stats, index) => {
                      const winPerRaw =
                        parseInt(stats.wins) / parseInt(stats.gamesPlayed);
                      const winPer = winPerRaw.toFixed(2);
                      const statIndex = (index += 1);
                      return (
                        <tr className="stats_row" key={stats.id}>
                          <td className="position_data">{statIndex}.</td>
                          <td className="title_data">
                            <img
                              className="standings_logo"
                              src={stats.logo}
                              alt="logo"
                            />
                            {stats.teamName}
                          </td>
                          <td className="stats_data">{stats.gamesPlayed}</td>
                          <td className="stats_data">{stats.wins}</td>
                          <td className="stats_data">{stats.losses}</td>
                          <td className="stats_data">{stats.tie}</td>
                          <td className="stats_data">{stats.otLoses}</td>
                          <td className="stats_data points">{stats.points}</td>
                          <td className="stats_data">{winPer}</td>
                          <td className="stats_data">{stats.goalsFor}</td>
                          <td className="stats_data">{stats.goalsAgainst}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
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
          onClick={() => {
            const id = 1;
            openStandings(id);
          }}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div>
          {" "}
          {open1 ? (
            <div className="standings">
              <h3 className="standing_title">Standings</h3>
              <table className="standings_table white">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>GP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                    <th>OTL</th>
                    <th className="points">P</th>
                    <th>W%</th>
                    <th>GF</th>
                    <th>GA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings
                    .map((stats) => {
                      return stats;
                    })
                    .filter((stats) => stats.divison === "White")
                    .sort((a, b) =>
                      parseInt(a.points) > parseInt(b.points) ? -1 : 1
                    )
                    .map((stats, index) => {
                      const winPerRaw =
                        parseInt(stats.wins) / parseInt(stats.gamesPlayed);
                      const winPer = winPerRaw.toFixed(2);
                      const statIndex = (index += 1);
                      return (
                        <tr className="stats_row" key={stats.id}>
                          <td className="position_data">{statIndex}.</td>
                          <td className="title_data">
                            <img
                              className="standings_logo"
                              src={stats.logo}
                              alt="logo"
                            />
                            {stats.teamName}
                          </td>
                          <td className="stats_data">{stats.gamesPlayed}</td>
                          <td className="stats_data">{stats.wins}</td>
                          <td className="stats_data">{stats.losses}</td>
                          <td className="stats_data">{stats.tie}</td>
                          <td className="stats_data">{stats.otLoses}</td>
                          <td className="stats_data points">{stats.points}</td>
                          <td className="stats_data">{winPer}</td>
                          <td className="stats_data">{stats.goalsFor}</td>
                          <td className="stats_data">{stats.goalsAgainst}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>{" "}
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
          onClick={() => {
            const id = 2;
            openStandings(id);
          }}
        >
          <FiChevronsDown style={{ fontSize: "1.5rem" }} />
        </div>
        <div>
          {" "}
          {open2 ? (
            <div className="standings">
              <h3 className="standing_title">Standings</h3>
              <table className="standings_table blue">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>GP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                    <th>OTL</th>
                    <th className="points">P</th>
                    <th>W%</th>
                    <th>GF</th>
                    <th>GA</th>
                  </tr>
                </thead>
                <tbody>
                  {standings
                    .map((stats) => {
                      return stats;
                    })
                    .filter((stats) => stats.divison === "Blue")
                    .sort((a, b) =>
                      parseInt(a.points) > parseInt(b.points) ? -1 : 1
                    )
                    .map((stats, index) => {
                      const winPerRaw =
                        parseInt(stats.wins) / parseInt(stats.gamesPlayed);
                      const winPer = winPerRaw.toFixed(2);
                      const statIndex = (index += 1);
                      return (
                        <tr className="stats_row" key={stats.id}>
                          <td className="position_data">{statIndex}.</td>
                          <td className="title_data">
                            <img
                              className="standings_logo"
                              src={stats.logo}
                              alt="logo"
                            />
                            {stats.teamName}
                          </td>
                          <td className="stats_data">{stats.gamesPlayed}</td>
                          <td className="stats_data">{stats.wins}</td>
                          <td className="stats_data">{stats.losses}</td>
                          <td className="stats_data">{stats.tie}</td>
                          <td className="stats_data">{stats.otLoses}</td>
                          <td className="stats_data points">{stats.points}</td>
                          <td className="stats_data">{winPer}</td>
                          <td className="stats_data">{stats.goalsFor}</td>
                          <td className="stats_data">{stats.goalsAgainst}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>{" "}
      </section>
    </div>
  );
}

export default TeamTiles;
