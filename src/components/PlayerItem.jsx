import React from "react";
import "./playerItem.css";
import { FaUserLarge } from "react-icons/fa6";
import { RiUser3Fill } from "react-icons/ri";

function PlayerItem({roster}) {
  return (
    <div className="player_item">
      <div className="player_image_container">
        <img src="../../src/assets/Player_Icon.svg" alt="player image" />
      </div>
      <h3 className="player_name">{roster.firstName} {roster.lastName}</h3>
      <h2 className="player_number">{roster.jerseyNumber}</h2>
      <small className="player_class">{roster.class}</small>
    </div>
  );
}

export default PlayerItem;
