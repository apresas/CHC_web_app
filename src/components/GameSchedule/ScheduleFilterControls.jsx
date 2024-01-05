import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import "./scheduleFilterControls.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";

function ScheduleFilterControls({
  dropdownTitle, setDropdownTitle
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <div className="filter_controls_container">
      <div className="date_range_selector">
        <button className="prev_btn">
          <FiChevronLeft />
        </button>
        <button className="date_btn">Dec 9-15</button>
        <button className="next_btn">
          <FiChevronRight />
        </button>
      </div>
      <Dropdown dropdownTitle={dropdownTitle} setDropdownTitle={setDropdownTitle}/>
      {/* <div className="team_selector">
        <button className="select_btn" onClick={handleOpen}>
          All Teams
          <div className="arrow_btn">
            <span /> <IoChevronDown />
          </div>
        </button>
      </div> */}
    </div>
  );
}

export default ScheduleFilterControls;
