import React, { useState, useEffect } from 'react';
import styles from "./SelectStatus.module.scss";
import "../../styles/abstract/constants.scss";
import yellowColor from "../../assets/img/select-arrow-yellow.svg";
import redColor from "../../assets/img/select-arrow-red.svg";
import greenColor from "../../assets/img/select-arrow-green.svg";

function SelectStatus({date}) {
    const [status, setStatus] = useState('');
    const [inputValue, setInputValue] = useState('');
  
    const handleSelectList = () => {
      const selectList = document.querySelector(`.${styles.dropdown__list}`);
      selectList.classList.toggle(styles.dropdown__list_visible);
    }
  
    useEffect(() => {
      const itemArray = document.querySelectorAll('.dropdown__list-item');
      const dropdownButton = document.querySelector(`.${styles.dropdown__button}`);
      itemArray.forEach(item => {
        item.addEventListener('click', (e) => {
          if(e.target === e.currentTarget) {
            if(item.id === '1') {
              dropdownButton.setAttribute('style', 'color: #ef3124; border: 1px solid #ef3124;')
              dropdownButton.style.backgroundImage = `url(${redColor})`;
            }
            if(item.id === '2') {
              dropdownButton.setAttribute('style', 'color: #fa9313; border: 1px solid #fa9313;');
              dropdownButton.style.backgroundImage = `url(${yellowColor})`;
            }
            if(item.id === '3') {
              dropdownButton.setAttribute('style', 'color: #0cc44d; border: 1px solid #0cc44d;')
              dropdownButton.style.backgroundImage = `url(${greenColor})`
            }
            setStatus(item.textContent)
            setInputValue(item.id)
          }
        })
      })
      handleSelectList()
    },[])
  
    useEffect(() => {
      document.addEventListener('click', (e) => {
        const dropdownButton = document.querySelector(`.${styles.dropdown__button}`)
      if(e.target !== dropdownButton) {
        const selectList = document.querySelector(`.${styles.dropdown__list}`)
        selectList.classList.remove(styles.dropdown__list_visible);
    } })
    }, [])

    return (
        <div className={styles.card__block}>
        <p>{`До ${date}`}</p>
        <div className={styles.dropdown}>
        <button name="status" id="status-select" className={`${styles.dropdown__button} ${styles.arrow}`} onClick={handleSelectList}>
          {status ||'Не выполнено'}
        </button>
        <ul className={styles.dropdown__list}>
          <li  className="dropdown__list-item" id="1">Не выполнено</li>
          <li  className="dropdown__list-item" id="2">В работе</li>
          <li  className="dropdown__list-item" id="3">Выполнено</li>
        </ul>
      </div>
      <input type="text" name="select-input" value={inputValue} className={styles.dropdown__input}></input>
      </div>
    )
}

export default SelectStatus
