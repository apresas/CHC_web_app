import React from "react";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import "./scheduleTable.css";

function ScheduleTable({ gameData, date }) {
  console.log(date[0].date);

  const titleDate = new Date(date.date)
  console.log(titleDate.toDateString())

  return (
    <>
      <div className="schedule_table_container">
        <h2>Thu, December 28</h2>
        <TableHeader />
        {gameData.map((data,i) => (
          <TableItem id={i} gameData={data}/>
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
