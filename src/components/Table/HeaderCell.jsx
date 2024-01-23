import React from "react";

function HeaderCell({ column, sorting, sortTable }) {
    const isDescSorting = sorting.column === column && sorting.order === "desc"
    const isAscSorting = sorting.column === column && sorting.order === "asc"
    const futureSortingOrder = isDescSorting ? 'asc' : 'desc'
  return (
    <th className="sort_table_cell" key={column} onClick={() => sortTable({column, order: futureSortingOrder})}>
      {column}
      {isDescSorting && <span>▼</span>}
      {isAscSorting && <span>▲</span>}
    </th>
  );
}

export default HeaderCell;
