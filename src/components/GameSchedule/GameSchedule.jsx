import React from "react";
import DayTile from "./DayTile";
import SchduleTable from "./ScheduleTable";
import ScheduleFilterControls from "./ScheduleFilterControls";
import "./gameSchedule.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function GameSchedule() {
  return (
    <>
      <div className="schedule_container">
        <div className="schedule_content_container">
          <h1>Schedule</h1>
          <ScheduleFilterControls />
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
            <SchduleTable />
            <SchduleTable />
          </div>
          <div className="schedule_controller">
            <button className="schedule_btn"><FiChevronLeft /> Previous</button>
            <button className="schedule_btn">Next <FiChevronRight /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameSchedule;
