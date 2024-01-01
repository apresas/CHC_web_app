import React from "react";
import "./awardItem.css";

function AwardItem() {
  return (
    <div className="award_item_container">
      <div className="award_logo_container">
        <img src="" alt="logo" />
      </div>
      <div className="award_item_info">
        <h2>Player Name</h2>
        <h3>School</h3>
        <h4>Position</h4>
      </div>
    </div>
  );
}

export default AwardItem;
