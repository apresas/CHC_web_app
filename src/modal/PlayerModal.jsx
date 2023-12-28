// import React from "react";
import "./playerModal.css";
import { IoClose } from "react-icons/io5";

function playerModal({ open, onClose, currentPlayer }) {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="overlay">
        <div className="modal_container">
          <div className="modal_controls">
            <div className="close_btn_container">
            <IoClose onClick={onClose} style={{ fontSize: "2.25rem" }} />
            </div>
          </div>
          <h2>{currentPlayer.firstName}</h2>
          <h2>{currentPlayer.lastName}</h2>
          <h2>{currentPlayer.jerseyNumber}</h2>
          <h2>{currentPlayer.class}</h2>
        </div>
      </div>
    </>
  );
}

export default playerModal;
