import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import NoGamesHeader from "./NoGamesHeader";
import "./scheduleTable.css";

function ScheduleTable({ gameData, date, filterTeam }) {
  const newDate = DateTime.fromISO(date).toFormat("DD");
  const week = DateTime.fromISO(date).toFormat("EEE");
  const title = week + ", " + newDate;

  // const [filteredItem, setFilteredItem] = useState([gameData]);

  // useEffect(() => {
  //   gameData
  //     .map((mDate) => mDate)
  //     .filter(
  //       (fDate) =>
  //         fDate.homeTeam === filterTeam || fDate.awayTeam === filterTeam
  //     )
  //     .map((mDate) => {
  //       console.log(mDate);
  //       let data = [];
  //       data.push(mDate);
  //       setFilteredItem(data);
  //       console.log(filteredItem);
  //     });
  // }, [filterTeam]);

  // console.log(filterTeam);


  return (
    <>
      <div className="schedule_table_container">
        <h2>{title}</h2>
        {gameData.length !== 0 ? <TableHeader /> : <NoGamesHeader/>}
        {/* <TableHeader /> */}
        {/* {filteredItem !== undefined
          ? filteredItem
              .filter((fItem) => fItem !== undefined)
              .map((fItem, i) => <TableItem id={i} key={i} gameData={fItem} />)
          : null} */}
        {gameData.map((data, i) => (
          <TableItem id={i} key={i} gameData={data} />
        ))}
      </div>
    </>
  );
}

export default ScheduleTable;
