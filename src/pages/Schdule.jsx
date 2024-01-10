import React from "react";
import NavBar from "../components/NavBar";
import GameSchedule from "../components/GameSchedule/GameSchedule";
import Footer from "../components/Footer";

function Schdule({
  setDropdownTitle,
  dropdownTitle,
  dateList,
  getDates
}) {
  return (
    <>
      <NavBar />
      <GameSchedule
        setDropdownTitle={setDropdownTitle}
        dropdownTitle={dropdownTitle}
        dateList={dateList}
        getDates={getDates}
      />
      <Footer />
    </>
  );
}

export default Schdule;
