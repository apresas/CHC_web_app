import React from 'react'
import "./currentStatsTable.css";

function currentStatsTable({currentPlayer}) {
  return (
    <table className="current_stats_table">
    <thead>
      <tr className="current_table_header">
        <th className="current_year_title">SEASON</th>
        <th>GP</th>
        <th>G</th>
        <th>A</th>
        <th>P</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="current_year_title">
          2023-24
        </td>
        <td>{currentPlayer.stats.currentSeason.gamesPlayed}</td>
        <td>{currentPlayer.stats.currentSeason.goals}</td>
        <td>{currentPlayer.stats.currentSeason.assists}</td>
        <td>{currentPlayer.stats.currentSeason.points}</td>
      </tr>
    </tbody>
  </table>
  )
}

export default currentStatsTable