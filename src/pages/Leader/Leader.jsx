import { useDispatch, useSelector } from "react-redux";
import BackLink from '../../components/BackLink/BackLink';
import ShowList from '../../components/ShowList/ShowList';
import ConfirmPopup from "../../components/ConfirmPopup/ConfirmPopup";

import styles from './Leader.module.scss';

const Leader = () => {
  const { isActive } = useSelector((state) => state.modal);
  const { iprCards } = useSelector((state) => state.allIpr);

  const handleCompleteIPR = () => {
    console.log("complete");
  };

  const handleDeleteIPR = () => {
    console.log("delete");
  };

  const handleCancelIPR = () => {
    console.log("delete");
  };
  return (
    <section className={styles.leader}>
      <BackLink text='Назад' link='/' />
      <h1 className={styles.leader__title}>
        Индивидуальные планы развития для сотрудников
      </h1>
      <ShowList cards={iprCards} />
      {(isActive === "complete" && <ConfirmPopup onClickOk={handleCompleteIPR}/>) ||
        (isActive === "cancel-card" && <ConfirmPopup onClickOk={handleCancelIPR}/>) ||
        (isActive === "delete" && <ConfirmPopup onClickOk={handleDeleteIPR}/>)}
    </section>
  );
};

export default Leader;
