// import React from 'react'
import "./leagueLeaders.css";
import { FiChevronRight } from "react-icons/fi";
import Teams from "../data/teams.json";
import { FiChevronsDown } from "react-icons/fi";

function LeagueLeaders() {
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
