import React from "react";
import styles from "./UserInfo.module.scss";
import { IDPcardsData } from "../../utils/data";

import avatarProfile from "../../assets/img/avatar-profile.png";

function UserInfo({
  avatar = avatarProfile,
  name = `Иванов Иван Иванович`,
  job = `Фронтенд-разработчик`,
  type,
}) {
  return (
    <>
      {type === "confirm" ? (
        <>
          <img className={styles.img_s} src={avatar} alt="avatar" />
          <div className={styles.info_s}>
            <h1>{name}</h1>
            <p>{job}</p>
          </div>
        </>
      ) : (
        <>
          <img className={styles.img} src={avatar} alt="avatar" />
          <div className={styles.info}>
            <h1>{name}</h1>
            <p>{job}</p>
          </div>
        </>
      )}
    </>
  );
}

export default UserInfo;
