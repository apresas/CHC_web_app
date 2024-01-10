import React, { useContext, createContext, useState } from "react";
import { format, addDays, eachDayOfInterval } from "date-fns";

const SiteContext = createContext();

export function useSite() {
  return useContext(SiteContext);
}

export const SiteProvider = ({ children }) => {
  const [currentTeam, setCurrentTeam] = useState({});
  const [rosterTeam, setRosterTeam] = useState();
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [dateList, setDateList] = useState([]);

  const getDates = (startDate) => {
    const start = new Date(startDate);
    const end = new Date(addDays(start, 6));
    const range = eachDayOfInterval({ start: start, end: end, steps: 1 });
    const dateRange = range.map((date) => format(date, "yyyy-MM-dd"));
    setDateList(dateRange);
  };

  // console.log(dateList);

  return (
    <SiteContext.Provider
      value={{
        currentTeam,
        setCurrentTeam,
        rosterTeam,
        setRosterTeam,
        currentPlayer,
        setCurrentPlayer,
        dateList,
        setDateList,
        getDates,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
