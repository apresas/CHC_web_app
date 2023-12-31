import React from "react";
import "./tableItem.css";

function TableItem({id}) {
  let rowColor = "rgb(245, 245, 252)"
  if(parseInt(id) % 2 === 0) {
    rowColor = "#e1e2f0"
  }
  return (
    <>
      {/* <table className="table_items">
        <thead>
          <tr>
            <th>Matchup</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div className="schedule_game_container">
              <span>Team 1 </span>{" "}
              <img
                src="../../src/assets/Logos/Olentangy_logo.svg"
                alt="team1"
                className="schedule_logo"
              />{" "}
              @{" "}
              <img
                src="../../src/assets/Logos/Orange_logo.svg"
                alt="team2"
                className="schedule_logo"
              />
              <span> Team 2</span>
            </div>
            <td>4-5</td>
          </tr>
        </tbody>
      </table> */}
      <div className="table_item_container">
        <div className="item_body" style={{backgroundColor: `${rowColor}`}}>
          <div className="schedule_game_container">
            <span>Team 1 </span>{" "}
            <img
              src="../../src/assets/Logos/Olentangy_logo.svg"
              alt="team1"
              className="schedule_logo"
            />{" "}
            @{" "}
            <img
              src="../../src/assets/Logos/Orange_logo.svg"
              alt="team2"
              className="schedule_logo"
            />
            <span> Team 2</span>
          </div>
          <div className="score">4-5</div>
        </div>
      </div>
    </>
  );
}

export default TableItem;
