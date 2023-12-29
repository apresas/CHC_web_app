import React, { useMemo } from "react";
import "./playerModal.css";
import { useTable, useSortBy } from "react-table";
import { IoClose } from "react-icons/io5";
import CurrentStatsTable from "../components/currentStatsTable";
import CareerStatsTable from "../components/CareerStatsTable";
function playerModal({
  open,
  onClose,
  currentPlayer,
  primaryColor,
  secondaryColor,
}) {
  // const data = useMemo(() => currentPlayer.stats.currentSeason, []);
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "GP",
  //       accessor: "gamesPlayed",
  //     },
  //     {
  //       Header: "G",
  //       accessor: "goals",
  //     },
  //     {
  //       Header: "A",
  //       accessor: "assists",
  //     },
  //     {
  //       Header: "P",
  //       accessor: "points",
  //     }
  //   ],
  //   []
  // );

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  // useTable({ columns, data }, useSortBy);

  if (!open) {
    return null;
  }
  let position = "";
  let height = "6'1\"";
  let weight = "155";
  let handedness = "L";
  let playerClass = "";

  if (currentPlayer.position === "F") {
    position = "Forward";
  } else if (currentPlayer.position === "D") {
    position = "Defense";
  } else {
    position = "Goalie";
  }

  if (currentPlayer.class === "2024") {
    playerClass = "Senior";
  } else if (currentPlayer.class === "2025") {
    playerClass = "Junior";
  } else if (currentPlayer.class === "2026") {
    playerClass = "Sophomore";
  } else {
    playerClass = "Freshman";
  }
  return (
    <>
      <div className="overlay" onClick={onClose}>
        <div className="modal_container" onClick={e => e.stopPropagation()}>
          <div className="modal_content">
            <div className="modal_left">
              <div className="player_info">
                <div className="player_portrait_container">
                  <img
                    src="../../src/assets/Player_Icon.svg"
                    alt="player image"
                  />
                </div>
                <h3 className="player_name">
                  {currentPlayer.firstName} {currentPlayer.lastName}
                </h3>
                <h2 className="player_number">{currentPlayer.jerseyNumber}</h2>
                <small className="player_class">{playerClass}</small>
                <span className="info_divider" />
                <div className="info_section_container">
                  <ul className="info_list">
                    <li>Height: <span>{height}</span></li>
                    <li>Weight: <span>{weight}lbs</span></li>
                    <li>Position: <span>{position}</span></li>
                    <li>Handedness: <span>{handedness}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="modal_right"
              style={{
                backgroundColor: `${primaryColor}`,
                color: `${secondaryColor}`,
              }}
            >
              <div className="modal_controls">
                <div className="close_btn_container">
                  <IoClose onClick={onClose} style={{ fontSize: "2.25rem" }} />
                </div>
              </div>
              <div className="stats_container">
                <div className="current_stats_container">
                  <h2 className="season_title">Season Stats</h2>
                  <CurrentStatsTable currentPlayer={currentPlayer}/>
                  {/* <table className="current_stats_table">
                    <thead>
                      <tr className="table_header">
                        <th className="year_title">SEASON</th>
                        <th>GP</th>
                        <th>G</th>
                        <th>A</th>
                        <th>P</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="year_title">
                          2023-24
                        </td>
                        <td>{currentPlayer.stats.currentSeason.gamesPlayed}</td>
                        <td>{currentPlayer.stats.currentSeason.goals}</td>
                        <td>{currentPlayer.stats.currentSeason.assists}</td>
                        <td>{currentPlayer.stats.currentSeason.points}</td>
                      </tr>
                    </tbody>
                  </table> */}
                  {/* <table className="standings_table blue" {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      {...headerGroup.getHeaderGroupProps()}
                    >
                      {headerGroup.headers.map((column) => (
                        <th key={headerGroup.id} {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows
                    .filter((row) => row.original.divison === "Red")
                    .sort((a, b) =>
                      parseInt(a.original.points) > parseInt(b.original.points)
                        ? -1
                        : 1
                    )
                    .map((row) => {
                      prepareRow(row);
                      return (
                        <tr key={row.id} {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td key={cell.id} {...cell.getCellProps()}>
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table> */}
                </div>
                <div className="career_stats_container">
                  <h2>Career Stats</h2>
                  <CareerStatsTable currentPlayer={currentPlayer}/>
                  {/* <table className="career_stats_table">
                    <thead>
                      <tr className="table_header">
                        <th className="year_title">YEAR</th>
                        <th>GP</th>
                        <th>G</th>
                        <th>A</th>
                        <th>P</th>
                      </tr>
                    </thead>
                    <tbody>

                        {currentPlayer.stats.careerStats.map((stats) => {
                          console.log(stats)
                          return (
                            <tr>
                            <td className="year_title">
                              {stats.title.toUpperCase()}
                            </td>
                            <td>
                              {stats.gamesPlayed}
                            </td>
                            <td>
                              {stats.goals}
                            </td>
                            <td>
                              {stats.assists}
                            </td>
                            <td>
                              {stats.points}
                            </td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default playerModal;
