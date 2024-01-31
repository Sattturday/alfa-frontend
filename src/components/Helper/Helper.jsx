import { useLocation } from "react-router-dom";
import FriendlyPic from "../../assets/img/friendly-pic.png";
import styles from "./Helper.module.scss";

function Helper({ title, advices, type = "list" }) {
  const { pathname } = useLocation();
  return (
    <section className={`${styles.helper} ${styles[type]}`}>
      <img src={FriendlyPic} alt="Смайл" />
      <h3 className={styles.title}>{title}</h3>
      {pathname === "/" || "/employee"? (
        <p className={styles.text}>{advices}</p>
      ) : (
        <ul className={styles.advices}>
          {advices.map((advice, index) => (
            <li key={index} className={styles.item}>
              <p>{advice}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Helper;
