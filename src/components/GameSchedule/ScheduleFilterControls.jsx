import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import "./scheduleFilterControls.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function ScheduleFilterControls({ dropdownTitle, setDropdownTitle, getDates }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleDayClick = (day) => {
    setSelected(day);
    getDates(day);
    setOpen(false);
  };

  useEffect(() => {
    setSelected(new Date());
    getDates(new Date());
  }, []);

  const handleOpen = () => {
    setOpen(!open);
    console.log("clicked");
  };

  let header = "";
  if (selected) {
    let endDate = new Date(
      DateTime.fromISO(selected.toISOString()).plus({ days: 7 }).toISODate()
    );
    header = format(selected, "PP") + " - " + format(endDate, "PP");
  }

  return (
    <div className="filter_controls_container">
      <div className="date_picker_container">
        <div className="date_range_selector">
          <button className="prev_btn">
            <FiChevronLeft />
          </button>
          <button className="date_btn" onClick={handleOpen}>
            {header}
          </button>
          <button className="next_btn">
            <FiChevronRight />
          </button>
        </div>
        {open ? (
          <div className="popup_container">
            <DayPicker selected={selected} onDayClick={handleDayClick} />
          </div>
        ) : null}
      </div>
      <Dropdown
        dropdownTitle={dropdownTitle}
        setDropdownTitle={setDropdownTitle}
      />
    </div>
  );
}

export default ScheduleFilterControls;
