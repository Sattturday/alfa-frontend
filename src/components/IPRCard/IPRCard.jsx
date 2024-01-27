import React, { useState } from "react";
import styles from "./IPRCard.module.scss";
import FriendlyPic from "../../assets/img/friendly-pic.png";
import ConfirmPopup from "../ConfirmPopup/ConfirmPopup";
import { Button } from "@alfalab/core-components/button";
import { Input } from "@alfalab/core-components/input";
import { Textarea } from "@alfalab/core-components/textarea";
import { UniversalDateInput } from "@alfalab/core-components/universal-date-input";

function IPRCard({ onClickCancel, showPopup, onClickOk }) {
  const [dataValue, setDataValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleChangeDataInput = (_, { value }) => {
    setDataValue(value);
    //setTitleValue(value);
    //setDescriptionValue(value);
  };

  return (
    <>
      <article className={styles.card}>
        <h3>Создание ИПР</h3>
        <div className={styles.container}>
          <form id="ipr-form" className={styles.form}>
            <Input
              name="title-IPR"
              label="Название ИПР"
              block
              type="text"
              size="m"
              value={titleValue}
              //onChange={}
            />
            <Input
              name="description-IPR"
              label="Цель"
              block
              type="text"
              size="m"
              value={descriptionValue}
              //onChange={}
            />
            <Textarea
              label={"Описание"}
              autosize={false}
              minRows={3}
              block={true}
            />
            <UniversalDateInput
              block={false}
              view="date"
              label="Дeдлайн ИПР"
              labelView="inner"
              size="m"
              className={styles.input_date}
              picker={true}
              value={dataValue}
              onChange={handleChangeDataInput}
              clear={false}
              onClear={(e) => {
                e.stopPropagation();
                setDataValue("");
              }}
            />
          </form>
          <section className={styles.instruction_container}>
            <img src={FriendlyPic} alt="Смайл" />
            <h3>Принципы заполнения ИПР</h3>
            <p>Для создания нового ИПР необходимо:</p>
            <ul>
              <li>заполнить все поля</li>
              <li>создать хотя бы одну задачу</li>
            </ul>
          </section>
        </div>
        <Button
          type="submit"
          form="ipr-form"
          className={styles.button}
          view="accent"
          disabled
        >
          Создать
        </Button>
      </article>
      <ConfirmPopup
        showPopup={showPopup}
        onClickCancel={onClickCancel}
        onClickOk={onClickOk}
        title="Вы уверены, что хотите прекратить создание ИПР?"
        description="Введённые вами данные не сохранятся."
        leftButtonText="Отменить"
        rightButtonText="Ок"
      />
    </>
  );
}

export default IPRCard;
