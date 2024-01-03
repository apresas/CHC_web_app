import React from 'react'
import "./allDivision.css"

function AllDivisionItem() {
  return (
    <div className="all_division_item_container">
        <div className="all_division_position">G</div>
        <div className="all_division_logo">
            <img src="" alt="logo" />
        </div>
        <div className="all_division_info">
            <h2>Player Name</h2>
            <h3>Team Name</h3>
        </div>
    </div>
  )
}

export default AllDivisionItem