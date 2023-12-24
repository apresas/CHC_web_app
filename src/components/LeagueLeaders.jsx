import React, { useState, useEffect } from "react";
import "./leagueLeaders.css";
import { FiChevronRight } from "react-icons/fi";
import Teams from "../data/teams.json";
import LeaderStats from "../data/playerStats.json";
import GoalieLeadersStats from "../data/goalieStats.json";
import { FiChevronsDown } from "react-icons/fi";
import LeaderStatsItem from "./LeaderStatsItem";

function LeagueLeaders() {
  const [playerStats, setPlayerStats] = useState();
  const [goalieStats, setGoalieStats] = useState();
  const [leaderStats, setLeaderStats] = useState(LeaderStats);
  const [goalieLeaderStats, setGoalieLeaderStats] =
    useState(GoalieLeadersStats);
  const [currentPointsLeader, setCurrentPointsLeader] = useState({});
  const [currentGoalsLeader, setCurrentGoalsLeader] = useState({});
  const [currentGAALeader, setCurrentGAALeader] = useState({});
  const [currentSVLeader, setCurrentSVLeader] = useState({});

  const onStatsHover = (stats, type) => {
    if (type === "POINTS") {
      setCurrentPointsLeader(stats);
    } else if (type === "GOALS") {
      setCurrentGoalsLeader(stats);
    } else if (type === "GAA") {
      setCurrentGAALeader(stats)
    } else if (type === "SV") {
      setCurrentSVLeader(stats)
    }
  };

  useEffect(() => {
    {
      LeaderStats.sort((a, b) => (a.points > b.points ? -1 : 1))
        .filter((stat, index) => index === 0)
        .map((stat) => setCurrentPointsLeader(stat));
    }
    {
      LeaderStats.sort((a, b) => (a.goals > b.goals ? -1 : 1))
        .filter((stats, index) => index === 0)
        .map((stat) => setCurrentGoalsLeader(stat));
    }
    {
      goalieLeaderStats.sort((a, b) => (a.GAA > b.GAA ? 1 : -1))
        .filter((stats, index) => index === 0)
        .map((stat) => setCurrentGAALeader(stat));
    }
    {
      goalieLeaderStats.sort((a, b) => (a.SV > b.SV ? -1 : 1))
        .filter((stats, index) => index === 0)
        .map((stat) => setCurrentSVLeader(stat));
    }
  }, []);

  return (
    <div className="leagueLeaders_container">
      <div className="leagueLeaders_content_container">
        <h2 className="leagueLeaders_title">
          <a className="leagueLeaders_link" href="">
            2023-24 League Leaders
          </a>
          <div className="icon_container">
            <FiChevronRight />
          </div>
        </h2>
        <h3 className="leagueLeaders_dvision_title">Red Division</h3>
        <div className="stats_tile">
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={currentPointsLeader.logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Points</h4>
                  <h4 className="stats_name_title">
                    {currentPointsLeader.firstName}{" "}
                    {currentPointsLeader.lastName}
                  </h4>
                  <small>Class: {currentPointsLeader.class}</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">
                    {currentPointsLeader.points}
                  </h2>
                  <small>POINTS</small>
                </div>
              </div>
              <div className="leader_stats_points">
                {leaderStats
                  .sort((a, b) => (a.points > b.points ? -1 : 1))
                  .map((stats, index) => (
                    <div
                      onMouseEnter={() => {
                        onStatsHover(stats, "POINTS");
                      }}
                    >
                      <LeaderStatsItem
                        key={stats.playerID}
                        stats={stats}
                        index={index}
                        type={"POINTS"}
                      />
                    </div>
                  ))}
              </div>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={currentGoalsLeader.logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Goals</h4>
                  <h4 className="stats_name_title">
                    {currentGoalsLeader.firstName} {currentGoalsLeader.lastName}
                  </h4>{" "}
                  <small>Class: {currentGoalsLeader.class}</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">
                    {currentGoalsLeader.goals}
                  </h2>{" "}
                  <small>GOALS</small>
                </div>
              </div>
              <div className="leader_stats_points">
                {leaderStats
                  .sort((a, b) => (a.goals > b.goals ? -1 : 1))
                  .map((stats, index) => (
                    <div
                      onMouseEnter={() => {
                        onStatsHover(stats, "GOALS");
                      }}
                    >
                      <LeaderStatsItem
                        key={stats.playerID}
                        stats={stats}
                        index={index}
                        type={"GOALS"}
                      />
                    </div>
                  ))}
              </div>{" "}
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={currentGAALeader.logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">GAA</h4>
                  <h4 className="stats_name_title">{currentGAALeader.firstName} {currentGAALeader.lastName}</h4>{" "}
                  <small>Class: {currentGAALeader.class}</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">{currentGAALeader.GAA}</h2> <small>GAA</small>
                </div>
              </div>
              <div className="leader_stats_points">
                {goalieLeaderStats
                  .sort((a, b) => (a.GAA > b.GAA ? 1 : -1))
                  .map((stats, index) => (
                    <div
                      onMouseEnter={() => {
                        onStatsHover(stats, "GAA");
                      }}
                    >
                      <LeaderStatsItem
                        key={stats.playerID}
                        stats={stats}
                        index={index}
                        type={"GAA"}
                      />
                    </div>
                  ))}
              </div>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={currentSVLeader.logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">SV%</h4>
                  <h4 className="stats_name_title">{currentSVLeader.firstName} {currentSVLeader.lastName}</h4>{" "}
                  <small>Class: {currentSVLeader.class}</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">{currentSVLeader.SV}</h2> <small>SV%</small>
                </div>
              </div>
              <div className="leader_stats_points">
                {goalieLeaderStats
                  .sort((a, b) => (a.SV > b.SV ? -1 : 1))
                  .map((stats, index) => (
                    <div
                      onMouseEnter={() => {
                        onStatsHover(stats, "SV");
                      }}
                    >
                      <LeaderStatsItem
                        key={stats.playerID}
                        stats={stats}
                        index={index}
                        type={"SV"}
                      />
                    </div>
                  ))}
              </div>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
        </div>
        <h3 className="leagueLeaders_dvision_title">White Division</h3>
        <div className="stats_tile">
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Points</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2>{" "}
                  <small>POINTS</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Goals</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>GOALS</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">GAA</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>GAA</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">SV%</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>SV%</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
        </div>
        <h3 className="leagueLeaders_dvision_title">Blue Division</h3>
        <div className="stats_tile">
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Points</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2>{" "}
                  <small>POINTS</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">Goals</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>GOALS</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">GAA</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>GAA</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
          <div className="stats_division">
            <div className="points_column">
              <div className="points_header">
                <img
                  className="stats_logo"
                  src={Teams[0].logo}
                  alt="team logo"
                />
                <div className="stats_player_info">
                  <h4 className="stats_points_title">SV%</h4>
                  <h4 className="stats_name_title">Player Name</h4>{" "}
                  <small>Class: 2025</small>
                </div>
                <div className="columns_total">
                  <h2 className="stats_point_total">57</h2> <small>SV%</small>
                </div>
              </div>
              <ul className="leader_stats_points">
                <li className="stats_item">
                  <p className="stats_item_index">1.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">2.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">3.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">4.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
                <li className="stats_item">
                  <p className="stats_item_index">5.</p>{" "}
                  <p className="stats_item_name">Player Name</p>{" "}
                  <p className="stats_item_total">57</p>
                </li>
              </ul>
              <div className="stats_button_container">
                <FiChevronsDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeagueLeaders;
