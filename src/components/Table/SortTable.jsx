import React, {useState, useEffect} from 'react'
import TableHeader from './TableHeader'
import TableContent from './TableContent'
import "./sortTable.css"

function SortTable() {
    const [tableData, setTableData] = useState();
    const [sorting, setSorting] = useState({column: "id", order: "asc"})
    const columns = ['id', 'name', 'age']
    const testEntries = [{id: 1, name: 'John', age:23}, {id: 2, name: 'Steve', age:25},{id: 3, name: 'Bill', age:33},{id: 4, name: 'Sally', age:46}]
    const sortTable = (newSorting) => {
        setSorting(newSorting)
    }

    // useEffect(() => {
    //     const url = `http://localhost:3004/users?_sort=${sorting.column}&_order=${sorting.order}`;
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setTableData(data);
    //     })
    // }, [sorting])
  return (
    <div>
        <table className='sort_table'>
            <TableHeader columns={columns} sorting={sorting} sortTable={sortTable}/>
            <TableContent entries={testEntries} columns={columns}/>
        </table>
    </div>
  )
}

export default SortTable