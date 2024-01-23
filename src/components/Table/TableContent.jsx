import React from 'react'

function TableContent({entries, columns}) {
  return (
    <tbody>
        {entries.map((entry) =>(
            <tr key={entry.id}>
                {columns.map((column) =>(
                    <td className="sort_table_cell" key={column}>{entry[column]}</td>
                ))}
            </tr>
        ))}
    </tbody>
  )
}

export default TableContent