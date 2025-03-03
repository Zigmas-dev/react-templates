import React from "react";
import AddClient from "./AddClient";
import "./clientModal.scss";

const ClientModal = ({ onClose, onSelectClient }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <AddClient onSelectClient={onSelectClient} />
      </div>
    </div>
  );
};

export default ClientModal;