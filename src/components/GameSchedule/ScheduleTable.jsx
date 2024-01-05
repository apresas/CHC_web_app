import React from "react";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import "./scheduleTable.css";

function ScheduleTable({ gameData, date }) {
  const titleDate = new Date(date)
  const gameDate = titleDate.toDateString().replace(/(\S+)\s+(\S+\s+\S+)/, "$1, $2,")

  return (
    <>
      <div className="schedule_table_container">
        <h2>{gameDate}</h2>
        <TableHeader />
        {gameData.map((data,i) => (
          <TableItem id={i} key={i} gameData={data}/>
        ))}
        {/* <TableItem id="1" />
        <TableItem id="2" />
        <TableItem id="3" />
        <TableItem id="4" /> */}
      </div>
    </>
  );
}

export default ScheduleTable;
