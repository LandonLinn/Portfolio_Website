import styles from "./Modal.module.css";
import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
