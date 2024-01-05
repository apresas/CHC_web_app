import React, { useState, useEffect } from "react";
import moment from "moment";
import { IoChevronDown } from "react-icons/io5";
import "./scheduleFilterControls.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ScheduleFilterControls({ dropdownTitle, setDropdownTitle }) {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange

  const handleOpen = () => {
    setOpen(!open);
    console.log("clicked");
  };

  const onChange = (date) => {
    // const [startDate, endDate] = dates;
    setStartDate(date);
    // setEndDate(endDate);
  };

  useEffect(() => {
    let sevendays = moment(startDate).add(7,"days");
    setEndDate(sevendays._d)
  }, [startDate])

  // const sevendays = moment(startDate).add(7,"days");

  // console.log(sevendays._d);
  console.log(startDate);
  console.log(endDate);
  return (
    <div className="filter_controls_container">
      <div className="date_range_selector">
        <button className="prev_btn">
          <FiChevronLeft />
        </button>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
        />
        <button className="next_btn">
          <FiChevronRight />
        </button>
      </div>

      <div className="date_range_selector">
        <button className="prev_btn">
          <FiChevronLeft />
        </button>
        <button className="date_btn">Dec 9-15</button>
        <button className="next_btn">
          <FiChevronRight />
        </button>
      </div>
      <Dropdown
        dropdownTitle={dropdownTitle}
        setDropdownTitle={setDropdownTitle}
      />
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
