import React from 'react';
import { FaRegCalendar } from "react-icons/fa";
import "./dayTile.css"
import { Link } from 'react-scroll'
import {DateTime} from "luxon"

function DayTile({href, date}) {
const month = DateTime.fromISO(date).toFormat("M")
const day = DateTime.fromISO(date).toFormat("d")
const dayOfWeek = DateTime.fromISO(date).toFormat("EEE")
const dateTitle = month + "/" + day;

// console.log(month + "/" + day + " " + dayOfWeek)

  return (
    <a className="day_container" href={href}>
        <div className="date_header">
            <div className="date">{dateTitle}</div>
            <div className="day">{dayOfWeek}</div>
        </div>
        <div className="game_container">
            <div className="number_of_games">9 Games</div>
            <FaRegCalendar />
        </div>
    </a>
  )
}

export default DayTile