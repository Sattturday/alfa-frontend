import React from "react";

import styles from "./Profile.module.scss";

import avatarProfile from "../../assets/img/avatar-profile.png";

function Profile({
  avatar = avatarProfile,
  name = `Иванов Иван Иванович`,
  job = `Фронтенд-разработчик`,
}) {
  return (
    <section className={styles.profile}>
      <img src={avatar} alt="avatar" />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{job}</p>
      </div>
    </section>
  );
}

export default Profile;
