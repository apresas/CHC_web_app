import React from 'react'
import TitleBar from '../TitleBar'
import "./ranking.css"

function Ranking() {
  return (
    <div className='ranking_container'>
        <div className="ranking_content_container">
            <TitleBar title="State Rankings" subtitle="2023-2024"/>
        </div>
    </div>
  )
}

export default Ranking