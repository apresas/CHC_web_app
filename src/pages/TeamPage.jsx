import React from 'react'
import { useParams } from 'react-router-dom'
import Team from '../components/Team'

function TeamPage({currentTeam, rosterTeam}) {
    const { id } = useParams(currentTeam.id);
  return (
    <Team id={currentTeam.id} pageID={id} currentTeam={currentTeam} rosterTeam={rosterTeam}/>
  )
}

export default TeamPage