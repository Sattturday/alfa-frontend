import React from "react";
import styles from "./UserInfo.module.scss";
import { useSelector } from "react-redux";

function UserInfo({ type }) {
  const { userData } = useSelector((state) => state.user);

  return (
    <>
      {type === "confirm" ? (
        <>
          <img className={styles.img_s} src={userData.avatar} alt="avatar" />
          <div className={styles.info_s}>
            <h1>{userData.name}</h1>
            <p>{userData.job}</p>
          </div>
        </>
      ) : (
        <>
          <img className={styles.img} src={userData.avatar} alt="avatar" />
          <div className={styles.info}>
            <h1>{userData.name}</h1>
            <p>{userData.job}</p>
          </div>
        </>
      )}
    </>
  );
}

export default UserInfo;
