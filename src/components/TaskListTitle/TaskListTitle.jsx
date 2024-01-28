import React from 'react'

import styles from "./TaskListTitle.module.scss"

function TaskListTitle() {
  return (
    <div className={styles.taskCard_list}>
        <h2>Список задач</h2>
        <button type="submit"></button>
      </div>
  )
}

export default TaskListTitle