import React, { useState } from "react";
import styles from "./Converter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loadRates} from "../redux/actions";
import Select from 'react-select'

function Converter(props) {
  const dispatch = useDispatch();

  const rates = useSelector((state) => state.application.rates);

  const [selectFrom, setSelectFrom] = useState(false);
  const [selectValueFrom, setSelectValueFrom] = useState("");
  const handleSelectFrom = () => {
    setSelectFrom(true);
  };
  const handleChangeSelectFrom = (e) => {
    setSelectValueFrom(e.target.innerHTML)
    setSelectFrom(false);
    console.log(e.target.innerHTML)
  };

  const [selectTo, setSelectTo] = useState(false);
  const [selectValueTo, setSelectValueTo] = useState("");
  const handleSelectTo = () => {
    setSelectTo(true);
  };
  const handleChangeSelectTo = (e) => {
    setSelectValueTo(e.currentTarget.textContent)
    setSelectTo(false);
  };

  const handleCalculate = (selectValueFrom) => {
     dispatch(loadRates(selectValueFrom))
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className={styles.mainBox}>
      <div className={styles.box}>
        <div>
          <div className={styles.title}>Количество</div>
          <input />
        </div>
        <div>
          <div className={styles.title}>Конвертировать из</div>
            <Select className={styles.select} options={options}/>
        </div>
        <div>
          <div className={styles.title}>Конвертировать в</div>
          <Select className={styles.select} options={options}/>
        </div>
        <div>
          <div className={styles.title}>Рассчитать</div>
          <div onClick={handleCalculate} className={styles.calculater}>></div>
        </div>
      </div>
      <div className={styles.resultBlock}>
        <div>1$ =</div>
        <div className={styles.result}>Result</div>
      </div>
    </div>
  );
}

export default Converter;
