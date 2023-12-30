import React from 'react'
import "./careerStatsTable.css"

function CareerStatsTable({currentPlayer}) {
  return (
    <table className="career_stats_table">
    <thead>
      <tr className="career_table_header">
        <th className="career_year_title">YEAR</th>
        <th>GP</th>
        <th>G</th>
        <th>A</th>
        <th>P</th>
      </tr>
    </thead>
    <tbody>

        {currentPlayer.stats.careerStats.map((stats) => {
          return (
            <tr>
            <td className="career_year_title">
              {stats.title.toUpperCase()}
            </td>
            <td>
              {stats.gamesPlayed}
            </td>
            <td>
              {stats.goals}
            </td>
            <td>
              {stats.assists}
            </td>
            <td>
              {stats.points}
            </td>
            </tr>
          )
        })}
    </tbody>
  </table>

  )
}

export default CareerStatsTable