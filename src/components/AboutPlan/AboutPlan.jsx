import React from "react";
import { CircularProgressBar } from "@alfalab/core-components-circular-progress-bar";

import styles from "./AboutePlan.module.scss";

function AboutPlan({ value = 65 }) {
  return (
    <section className={styles.root}>
      <div className={styles.infoColumn}>
        <h2>Название ИПР</h2>
        <p className={styles.subtitle}>Переход на позицию тим-лида</p>
        <p className={styles.description}>
          Ты мощь, ты сила, уважаю, ты красавчик. Однаждый в студеную зимную
          пору я из лесу вышел, был сильный мороз.Ты мощь, ты сила, уважаю, ты
          красавчик. Однаждый в студеную зимную пору я из лесу вышел, был
          сильный мороз.
        </p>
        <p className={styles.data}>До 12.04.2024</p>
      </div>
      <CircularProgressBar
        className={styles.progressBar}
        value={value}
        /* height={139} */
        size="xl"
        title={`${value}%`}
      />
    </section>
  );
}

export default AboutPlan;
