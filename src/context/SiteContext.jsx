import React, { useContext, createContext, useState, useEffect } from "react";
import { format, addDays, getDate } from "date-fns";
import { DateTime } from "luxon";
const SiteContext = createContext();

export function useSite() {
  return (useContext(SiteContext));
}

export const SiteProvider = ({ children }) => {
    const [currentTeam, setCurrentTeam] = useState({});
    const [rosterTeam, setRosterTeam] = useState();
    const [currentPlayer, setCurrentPlayer] = useState({});
    const [date, setDate] = useState();
    const [dateList, setDateList] = useState([]);
    const [selectedDate, setSelectedDate] = useState()

    const getDates = (startDate) => {
      let dateArray = new Array();
      let endDate = new Date(addDays(startDate, 6));
      while (startDate <= endDate) {
        dateArray.push(DateTime.fromISO(startDate.toISOString()).toISODate());
        startDate.setDate(startDate.getDate() + 1);
      }
      setDateList(dateArray);
    }

    // useEffect(() => {
    //   getDates(date)
    // }, [date])

    console.log(dateList)
    // console.log(date)
  return (<SiteContext.Provider value={{
    currentTeam,
    setCurrentTeam,
    rosterTeam,
    setRosterTeam,
    currentPlayer,
    setCurrentPlayer,
    dateList,
    setDateList,
    date,
    setDate,
    getDates,
    selectedDate,
    setSelectedDate,
  }}>{children}</SiteContext.Provider>);
};


