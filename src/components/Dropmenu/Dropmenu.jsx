import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { useClickOutside } from "../../hooks/useClickOutside";
import { actionButtons } from "../../utils/data";
import {
  openConfirmPopup,
  setDataInfo,
  setIsActive,
} from "../../store/modalSlice";

import styles from "./Dropmenu.module.scss";

const Dropmenu = () => {
  const [isActivate, setIsActivate] = useState(false);
  const [ordering, setOrdering] = useState(false);
  const actionRef = useRef(null);
  const dispatch = useDispatch();

  // Использование кастомного хука, который определяет клик вне определенной области
  useClickOutside(actionRef, () => {
    if (isActivate) setTimeout(() => setIsActivate(false), 200);
  });

  // Обработчик клика для открытия/закрытия панели сортировки
  const onClickNavTab = () => {
    setIsActivate(!isActivate);
  };

  // Обработчик сортировки при выборе опции сортировки
  const onClickActionHandler = (e) => {
    if (e.target.id === "complete") {
      dispatch(setIsActive("complete"));
      dispatch(
        setDataInfo({
          title: "Вы уверены, что хотите завершить ИПР?",
          leftButtonText: "Отменить",
          rightButtonText: "Завершить",
        })
      );
      setOrdering(e.target.id);
      console.log(e.target.id);
      dispatch(openConfirmPopup());
    }
    if (e.target.id === "cancel") {
      dispatch(setIsActive("cancel-card"));
      dispatch(
        setDataInfo({
          title: "Вы уверены, что хотите отменить ИПР?",
          leftButtonText: "Отменить",
          rightButtonText: "Ок",
        })
      );
      setOrdering(e.target.id);
      console.log(e.target.id);
      dispatch(openConfirmPopup());
    }
    if (e.target.id === "delete") {
      dispatch(setIsActive("delete"));
      dispatch(
        setDataInfo({
          title: "Вы уверены, что хотите удалить ИПР?",
          leftButtonText: "Отменить",
          rightButtonText: "Удалить",
        })
      );
      setOrdering(e.target.id);
      console.log(e.target.id);
      dispatch(openConfirmPopup());
    }
    onClickNavTab();
  };

  return (
    <div
      className={`${styles.dropmenu} ${isActivate ? styles.active : ""}`}
      ref={actionRef}
    >
      <button
        className={`${styles.button} ${isActivate ? styles.active : ""}`}
        onClick={onClickNavTab}
      />
      {/* Список опций сортировки */}
      <ul className={`${styles.list} ${isActivate ? styles.active : ""}`}>
        {/* Перебор sortButtons для отображения отдельных опций сортировки */}
        {actionButtons.map((button) => {
          return (
            <li className={styles.item} key={button.id}>
              {/* Кнопка, представляющая каждую опцию сортировки */}
              <label className={styles.label}>
                <input
                  id={button.id}
                  className={styles.radio}
                  type="radio"
                  name={button.id}
                  checked={ordering === button.id}
                  onChange={onClickActionHandler}
                />
                <span>{button.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropmenu;
