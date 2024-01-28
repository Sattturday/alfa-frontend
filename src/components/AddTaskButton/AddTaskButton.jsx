import React, { useState } from "react";
import styles from "./AddTaskButton.module.scss";

function AddTaskButton({isActive = false}) {
  const [isActiveButton, setIsActiveButton] = useState(isActive);

  return <button type="button" className={styles.button} disabled={!isActiveButton}>
    <span className={isActiveButton ? `${styles.button_text}` : `${styles.button_text_invalid}`}>Добавить задачу</span>
  </button>;
}

export default AddTaskButton;
