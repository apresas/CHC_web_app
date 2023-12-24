import React, { useState, useEffect } from "react";
import LeaderStatsItem from "./LeaderStatsItem";
import { FiChevronsDown } from "react-icons/fi";

function LeadersStatTile({ stats, type, division }) {
  const [currentStats, setCurrentStats] = useState({});
  const [testData, setTestData] = useState([{}]);
  console.log(stats);


  const onStatsHover = (stats, type) => {
    if (type === "POINTS") {
      setCurrentStats(stats);
    }
    // else if (type === "GOALS") {
    //   setCurrentGoalsLeader(stats);
    // } else if (type === "GAA") {
    //   setCurrentGAALeader(stats);
    // } else if (type === "SV") {
    //   setCurrentSVLeader(stats);
    // }
  };

  useEffect(()=> {


  }, [])

  useEffect(() => {
    let filterData = [];
    if (division === "WHITE") {
      {
        stats
          .filter((stats) => stats.division === "White")
          .map((stat) => {
            filterData.push(stat);
          });
        setTestData(filterData);
      }

    }
    if (division === "RED") {
        {
          stats
            .filter((stats) => stats.division === "Red")
            .map((stat) => {
              filterData.push(stat);
            });
          setTestData(filterData);
        }
      }
      if (division === "BLUE") {
        {
          stats
            .filter((stats) => stats.division === "Blue")
            .map((stat) => {
              filterData.push(stat);
            });
          setTestData(filterData);
        }
  
      }
    

  }, [division]);

  useEffect(() => {
    // let filterCurrent = {}
    {
        testData.sort((a, b) => (a.points > b.points ? -1 : 1))
          .filter((stat, index) => index === 0)
          .map((stat) => setCurrentStats(stat));
      }
    //   setCurrentStats(filterCurrent)
  }, [testData])
  return (
    <div className="points_column">
      <div className="points_header">
        <img className="stats_logo" src={currentStats.logo} alt="team logo" />
        <div className="stats_player_info">
          <h4 className="stats_points_title">Points</h4>
          <h4 className="stats_name_title">
            {currentStats.firstName} {currentStats.lastName}
          </h4>
          <small>Class: {currentStats.class}</small>
        </div>
        <div className="columns_total">
          <h2 className="stats_point_total">{currentStats.points}</h2>
          <small>POINTS</small>
        </div>
      </div>
      <div className="leader_stats_points">
        {testData
          .sort((a, b) => (a.points > b.points ? -1 : 1))
          .map((stats, index) => (
            <div
              key={stats.key}
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
  );
}

export default LeadersStatTile;
