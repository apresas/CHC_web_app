import React from "react";
import DayTile from "./DayTile";
import SchduleTable from "./ScheduleTable";
import "./gameSchedule.css";

function GameSchedule() {
  return (
    <>
      <div className="schedule_container">
        <div className="schedule_content_container">
          <h1>Schedule</h1>
          <div className="day_tile_container">
            <DayTile />
            <DayTile />
            <DayTile />
            <DayTile />
            <DayTile />
            <DayTile />
            <DayTile />
          </div>
          <div className="schedule_table">
            <SchduleTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameSchedule;
