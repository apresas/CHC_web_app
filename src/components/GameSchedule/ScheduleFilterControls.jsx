import React, { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { DateTime } from "luxon";
import "./scheduleFilterControls.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import { format, addDays, getDate } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function ScheduleFilterControls({ dropdownTitle, setDropdownTitle, setDates, setDateList, setDate, getDates, date, dateList }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(new Date());

  // const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDayClick = (day) => {
    // setSelected(new Date("2024-01-05"))
    getDates(day)
    setOpen(false)

    console.log(day)

  }

  useEffect(() => {
    getDates(new Date())
  }, [])
  

  console.log(dateList)
  console.log(selected)
  // const defaultSelected = <DateRange from={selected} to={addDays(selected, 7)}
  // />
  // const {range, setRange} = useState<DateRange | undefined>(defaultSelected);

  const handleOpen = () => {
    setOpen(!open);
    console.log("clicked");
  };

  // console.log(selectedDate)


  // const startDate = "";

  // const getDates = (startDate) => {
  //   let dateArray = new Array();
  //   let currentDate = startDate;
  //   let newEnd = new Date(
  //     DateTime.fromISO(startDate.toISOString()).plus({ days: 7 }).toISODate()
  //   );
  //   while (currentDate <= newEnd) {
  //     dateArray.push(DateTime.fromISO(currentDate.toISOString()).toISODate());
  //     currentDate.setDate(currentDate.getDate() + 1);
  //   }
  //   setDateRange(dateArray);
  // };

  // const getDates = (startDate) => {
  //   // console.log(startDate)
  //   let dateArray = new Array();
  //   let endDate = new Date(addDays(startDate, 7));
  //   while (startDate <= endDate) {
  //     dateArray.push(DateTime.fromISO(startDate.toISOString()).toISODate());
  //     startDate.setDate(startDate.getDate() + 1);
  //   }
  //   // console.log(dateArray);
  //   setDateList(dateArray);
  //   // setDateRange(dateArray)
  // }

  // let testDate = new Date(
  //   DateTime.fromISO(selected.toISOString()).plus({ days: 7 }).toISODate()
  // );

  // let header = "";
  // if (selected) {
  //   // let endDate = new Date(
  //   //   DateTime.fromISO(selected.toISOString()).plus({ days: 7 }).toISODate()
  //   // );
  //   header = format(selected, "PP") + " - " + format(endDate, "PP");    
  // }
  
  // console.log(dateRange);
  // console.log(selected)

  // useEffect(() => {
  //   setDates(selected);
  // }, [selected]);

  return (
    <div className="filter_controls_container">
      <div className="date_picker_container">
        <div className="date_range_selector">
          <button className="prev_btn">
            <FiChevronLeft />
          </button>
          <button className="date_btn" onClick={handleOpen}>
            {dateList[0]} - {dateList[6]}
          </button>
          <button className="next_btn">
            <FiChevronRight />
          </button>
        </div>
        {open ? (
          <div className="popup_container">
            <DayPicker
              mode="single"
              selected={selected}
              onDayClick={handleDayClick}
              onSelect={setSelected}
              // onDayClick={() => getDates(selected)}
              // footer={footer}
            />
            {/* <DayPicker
              mode="range"
              selected={range}
              onSelect={setRange}
              // footer={footer}
            /> */}
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
