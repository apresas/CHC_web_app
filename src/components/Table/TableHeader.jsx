import React from "react";
import HeaderCell from "./HeaderCell";

function TableHeader({ columns, sorting, sortTable }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell
            column={column}
            sorting={sorting}
            key={column}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
