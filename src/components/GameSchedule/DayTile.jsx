import React from 'react';
import { FaRegCalendar } from "react-icons/fa";
import "./dayTile.css"

function DayTile({href}) {
  return (
    <a className="day_container" href={href}>
        <div className="date_header">
            <div className="date">12/28</div>
            <div className="day">Thu</div>
        </div>
        <div className="game_container">
            <div className="number_of_games">9 Games</div>
            <FaRegCalendar />
        </div>
    </a>
  )
}

export default DayTile