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
  const dateList = [
    "2023-11-13",
    "2023-11-14",
    "2023-11-15",
    "2023-11-16",
    "2023-11-17",
    "2023-11-18",
    "2023-11-19",
    "2023-11-20"
  ];
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
              {scheduleData
                .filter((data) => data.date === dateList[1])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[1]} />
                ))}
            </section>
            <section className="schedule_section" id="s2">
              {scheduleData
                .filter((data) => data.date === dateList[2])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[2]} />
                ))}
            </section>
            <section className="schedule_section" id="s3">
              {scheduleData
                .filter((data) => data.date === dateList[3])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[3]} />
                ))}
            </section>
            <section className="schedule_section" id="s4">
              {scheduleData
                .filter((data) => data.date === dateList[4])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[4]} />
                ))}
            </section>
            <section className="schedule_section" id="s5">
              {scheduleData
                .filter((data) => data.date === dateList[5])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[5]} />
                ))}
            </section>
            <section className="schedule_section" id="s6">
              {scheduleData
                .filter((data) => data.date === dateList[6])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[6]} />
                ))}
            </section>
            <section className="schedule_section" id="s7">
              {scheduleData
                .filter((data) => data.date === dateList[7])
                .map((data) => data.games)
                .map((data, i) => (
                  <SchduleTable key={i} gameData={data} date={dateList[7]} />
                ))}
            </section>
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
