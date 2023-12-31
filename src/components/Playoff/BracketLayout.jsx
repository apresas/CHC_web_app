import React from "react";
import BracketItem from "./BracketItem";
import "./bracketLayout.css";

function BracketLayout() {
  return (
    <div className="bracket_container">
      <div className="first_round">
        <div className="bracket_item " id="item_1"><div className="item_logo"></div></div>
        <div className="bracket_item" id="item_2"></div>
        <div className="bracket_item " id="item_3"></div>
        <div className="bracket_item" id="item_4"></div>
        <div className="bracket_item " id="item_5"></div>
        <div className="bracket_item" id="item_6"></div>
        <div className="bracket_item " id="item_7"></div>
        <div className="bracket_item" id="item_8"></div>
      </div>
      <div className="quater_finals">
        <div className="bracket_item " id="item_9"></div>
        <div className="bracket_item" id="item_10"></div>
        <div className="bracket_item" id="item_11"></div>
        <div className="bracket_item" id="item_12"></div>
        <div className="bracket_item" id="item_13"></div>
        <div className="bracket_item" id="item_14"></div>
        <div className="bracket_item" id="item_15"></div>
        <div className="bracket_item" id="item_16"></div>
      </div>
      <div className="semi_finals">
        <div className="bracket_item" id="item_17"></div>
        <div className="bracket_item" id="item_18"></div>
        <div className="bracket_item" id="item_19"></div>
        <div className="bracket_item" id="item_20"></div>
      </div>
      <div className="division_championship">
        <div className="bracket_item" id="item_21"></div>
        <div className="bracket_item" id="item_22"></div>
      </div>
      <div className="championship">
        <div className="bracket_item" id="item_23"></div>
        <div className="bracket_item" id="item_24"></div>
        <div className="bracket_item" id="item_25"></div>
      </div>
      <div className="division_championship">
        <div className="bracket_item" id="item_21"></div>
        <div className="bracket_item" id="item_22"></div>
      </div>
      <div className="semi_finals">
        <div className="bracket_item" id="item_17"></div>
        <div className="bracket_item" id="item_18"></div>
        <div className="bracket_item" id="item_19"></div>
        <div className="bracket_item" id="item_20"></div>
      </div>
      <div className="quater_finals">
        <div className="bracket_item " id="item_9"></div>
        <div className="bracket_item" id="item_10"></div>
        <div className="bracket_item" id="item_11"></div>
        <div className="bracket_item" id="item_12"></div>
        <div className="bracket_item" id="item_13"></div>
        <div className="bracket_item" id="item_14"></div>
        <div className="bracket_item" id="item_15"></div>
        <div className="bracket_item" id="item_16"></div>
      </div>
      <div className="first_round">
        <div className="bracket_item " id="item_1"></div>
        <div className="bracket_item" id="item_2"></div>
        <div className="bracket_item " id="item_3"></div>
        <div className="bracket_item" id="item_4"></div>
        <div className="bracket_item " id="item_5"></div>
        <div className="bracket_item" id="item_6"></div>
        <div className="bracket_item " id="item_7"></div>
        <div className="bracket_item" id="item_8"></div>
      </div>
    </div>
  );
}

export default BracketLayout;
