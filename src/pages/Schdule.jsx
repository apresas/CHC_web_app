import React from "react";
import NavBar from "../components/NavBar";
import GameSchedule from "../components/GameSchedule/GameSchedule";
import Footer from "../components/Footer";

function Schdule({
  setCurrentTeamTitle,
  currentTeamTitle,
  dateList,
  getDates,
  selected,
  setSelected,
  prevClick,
  nextClick,
  setFilteredItem,
  filteredItem
}) {
  return (
    <>
      <NavBar />
      <GameSchedule
        setCurrentTeamTitle={setCurrentTeamTitle}
        currentTeamTitle={currentTeamTitle}
        dateList={dateList}
        getDates={getDates}
        selected={selected}
        setSelected={setSelected}
        prevClick={prevClick}
        nextClick={nextClick}
        setFilteredItem={setFilteredItem}
        filteredItem={filteredItem}
      />
      <Footer />
    </>
  );
}

export default Schdule;
