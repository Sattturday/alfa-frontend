import IDPCard from "../IDPCard/IDPCard";
import styles from "./ShowList.module.scss";
import TaskCard from "../TaskCard/TaskCard";

const ShowList = ({ type = "IDP", cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => {
        const user = card.employeeId === card.id;
        return type === "IDP" ? (
          <IDPCard key={card.id} data={card} />
        ) : user ? (
          <TaskCard key={card.employeeId} card={card} />
        ) : (
          ""
        );
      })}
    </ul>
  );
};

export default ShowList;
