import React from "react";
import NavBar from "../components/NavBar";
import GameSchedule from "../components/GameSchedule/GameSchedule";
import Footer from "../components/Footer";

function Schdule({
  setDropdownTitle, dropdownTitle
}) {
  return (
    <>
      <NavBar />
      <GameSchedule setDropdownTitle={setDropdownTitle} dropdownTitle={dropdownTitle}/>
      <Footer />
    </>
  );
}

export default Schdule;
