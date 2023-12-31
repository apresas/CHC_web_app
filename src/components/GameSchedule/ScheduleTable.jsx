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
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
    </div>
    </>
  )
}

export default ScheduleTable