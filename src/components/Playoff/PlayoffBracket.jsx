import React from "react";
import BracketLayout from "./BracketLayout";
import "./playoffBracket.css";

function PlayoffBracket() {
  return (
    <div className="playoff_bracket_container">
      <div className="playoff_bracket_content_container">
        <BracketLayout />
      </div>
    </div>
  );
}

export default PlayoffBracket;
