import React, { useContext, createContext, useState } from "react";

const SiteContext = createContext();

export function useSite() {
  return (useContext(SiteContext));
}

export const SiteProvider = ({ children }) => {
    const [currentTeam, setCurrentTeam] = useState({});
    const [rosterTeam, setRosterTeam] = useState();
    const [currentPlayer, setCurrentPlayer] = useState({});
  return (<SiteContext.Provider value={{
    currentTeam,
    setCurrentTeam,
    rosterTeam,
    setRosterTeam,
    currentPlayer,
    setCurrentPlayer
  }}>{children}</SiteContext.Provider>);
};


