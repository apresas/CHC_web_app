import React from "react";
import "./awards.css";
import AwardItem from "./AwardItem";

function Awards() {
  return (
    <div className="awards_container">
      <div className="awards_content_container">
        <h1>All League Awards</h1>
        <h2>First Team</h2>
        <div className="first_team_container">
          <AwardItem />
          <AwardItem />
          <AwardItem />
          <AwardItem />
          <AwardItem />
        </div>
        <h2>Second Team</h2>
        <div className="second_team_container">
          <AwardItem />
          <AwardItem />
          <AwardItem />
          <AwardItem />
          <AwardItem />
        </div>
        <h2>All Division Team</h2>
        <div className="all_league_container"></div>
        <h2>Honorable Mentions</h2>
        <div className="honorable_mention_container"></div>
      </div>
    </div>
  );
}

export default Awards;
