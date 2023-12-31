import React from "react";
import "./tableHeader.css";

function TableHeader() {
  return (
    <div className="table_item_header">
      <h3 className="matchup_title">Matchup</h3>
      <h3 className="score_title">Score</h3>
    </div>
  );
}

export default TableHeader;
