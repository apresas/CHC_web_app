import React from 'react'
import TableItem from './TableItem'
import TableHeader from './TableHeader'
import "./scheduleTable.css"

function ScheduleTable() {
  return (
    <>
    <div className='schedule_table_container'>
        <h2>Thu, December 28</h2>
        <TableHeader />
        <TableItem id="1"/>
        <TableItem id="2"/>
        <TableItem id="3"/>
        <TableItem id="4"/>
    </div>
    </>
  )
}

export default ScheduleTable