import React, { useEffect, useState } from "react";
import DayTile from "./DayTile";
import SchduleTable from "./ScheduleTable";
import ScheduleFilterControls from "./ScheduleFilterControls";
import TitleBar from "../TitleBar";
import scheduleData from "../../data/schedule.json";
import "./gameSchedule.css";
import { Element } from "react-scroll";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function GameSchedule({ dropdownTitle, setDropDownTitle }) {
  return (
    <>
      <div className="schedule_container">
        <div className="schedule_content_container">
          {/* <h1>Schedule</h1> */}
          <TitleBar title="Schedule" subtitle="2023-2024" />
          <ScheduleFilterControls
            setDropDownTitle={setDropDownTitle}
            dropDownTitle={dropdownTitle}
          />
          <div className="day_tile_container">
            <DayTile href={"#s1"} />
            <DayTile href={"#s2"} />
            <DayTile href={"#s3"} />
            <DayTile href={"#s4"} />
            <DayTile href={"#s5"} />
            <DayTile href={"#s6"} />
            <DayTile href={"#s7"} />
          </div>
          <div className="schedule_table">
            <section className="schedule_section" id="s1">
              {scheduleData.filter((data) => data.date === "2023-11-17")
              .map((data) => data.games)
              .map((data) => (
                <SchduleTable gameData={data} date={scheduleData.filter((data) => data.date === "2023-11-17")}/>
              ))}
              {/* {scheduleData
                .filter((data) => data.date === "2023-12-17")
                .map((data) => data.games)
                .map((data) => {console.log(data)})
                } */}
            </section>
            {/* <section className="schedule_section" id="s2">
              <SchduleTable />
            </section>
            <section className="schedule_section" id="s3">
              <SchduleTable />
            </section>
            <section className="schedule_section" id="s4">
              <SchduleTable />
            </section>
            <section className="schedule_section" id="s5">
              <SchduleTable />
            </section>
            <section className="schedule_section" id="s6">
              <SchduleTable />
            </section>
            <section className="schedule_section" id="s7">
              <SchduleTable />
            </section> */}
          </div>
          <div className="schedule_controller">
            <button className="schedule_btn">
              <FiChevronLeft /> Previous
            </button>
            <button className="schedule_btn">
              Next <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameSchedule;
