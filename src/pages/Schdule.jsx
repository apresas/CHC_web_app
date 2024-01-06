import React from "react";
import NavBar from "../components/NavBar";
import GameSchedule from "../components/GameSchedule/GameSchedule";
import Footer from "../components/Footer";

function Schdule({
  setDropdownTitle, dropdownTitle, setDateList, dateList, setDate, date, getDates
}) {
  return (
    <>
      <NavBar />
      <GameSchedule setDropdownTitle={setDropdownTitle} dropdownTitle={dropdownTitle} setDateList={setDateList} dateList={dateList} setDate={setDate} date={date} getDates={getDates}/>
      <Footer />
    </>
  );
}

export default Schdule;
