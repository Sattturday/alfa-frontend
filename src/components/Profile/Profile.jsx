import React from "react";
import { useLocation } from "react-router-dom";

import { Button } from '@alfalab/core-components/button';
import { CheckmarkMIcon } from "@alfalab/icons-glyph/CheckmarkMIcon";
import { PauseCompactMIcon } from "@alfalab/icons-glyph/PauseCompactMIcon";
import { TrashCanLineMIcon } from "@alfalab/icons-glyph/TrashCanLineMIcon";

import avatarProfile from "../../assets/img/avatar-profile.png";

import styles from "./Profile.module.scss";

function Profile({
  avatar = avatarProfile,
  name = `Иванов Иван Иванович`,
  job = `Фронтенд-разработчик`,
  isOpenAboutPlan,
}) {
  const { pathname } = useLocation();

  return (
    <section className={styles.profile}>
      <img src={avatar} alt="avatar" />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
      {(pathname === "/management" && isOpenAboutPlan) ? (
        <div className={styles.buttonField}>
          <Button
            className={styles.button}
            leftAddons={<CheckmarkMIcon />}
            view="accent"
          >
            Завершить
          </Button>
          <Button
            className={styles.button}
            leftAddons={<PauseCompactMIcon />}
            view="primary"
          >
            Отменить
          </Button>
          <Button
            className={styles.button}
            view="primary"
            leftAddons={<TrashCanLineMIcon />}
          ></Button>
        </div>
      ) : ''}
    </section>
  );
}

export default Profile;
