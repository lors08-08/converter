import React, { useState } from "react";
import styles from "./Converter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadRates, setCurrencyFrom, setCurrencyTo } from "../redux/actions";
import Select from "react-select";

function Converter(props) {
  const dispatch = useDispatch();

  const rates = useSelector((state) => state.application.rates);

  const [showResult, setShowResult] = useState(false);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(e.target.value);
    setShowResult(false);
  };
  const [selectValueFrom, setSelectValueFrom] = useState("");

  const handleChangeSelectFrom = (e) => {
    setSelectValueFrom(e.value);
    dispatch(setCurrencyFrom(e.value.toString()));
    setShowResult(false);
  };

  const [selectValueTo, setSelectValueTo] = useState("");

  const handleChangeSelectTo = (e) => {
    setSelectValueTo(e.value);
    dispatch(setCurrencyTo(e.value.toString()));
  };

  const handleCalculate = (e) => {
    dispatch(loadRates(selectValueFrom.toString()));
    setShowResult(true);
  };
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  const options = [
    { value: "USD", label: "USD-США доллар" },
    { value: "EUR", label: "EUR-Евро" },
    { value: "RUB", label: "RUB-Рубль" },
    { value: "GBP", label: "GBP-Фунт стерлингов" },
    { value: "INR", label: "INR-Индийский рупий" },
    { value: "AUD", label: "AUR-Австралийский доллар" },
    { value: "CAD", label: "CAD-Канадский доллар" },
    { value: "JPY", label: "JPY-Японская иена " },
    { value: "KRW", label: "KRW-Южнокорейская вона" },
  ];

  return (
    <div className={styles.mainBox}>
      <div className={styles.box}>
        <div>
          <div className={styles.title}>Количество</div>
          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="сумма"
          />
        </div>
        <div>
          <div className={styles.title}>Конвертировать из</div>
          <Select
            onChange={handleChangeSelectFrom}
            className={styles.select}
            options={options}
          />
        </div>
        <div>
          <div className={styles.title}>Конвертировать в</div>
          <Select
            onChange={handleChangeSelectTo}
            className={styles.select}
            options={options}
          />
        </div>
        <div>
          <div className={styles.title}>Рассчитать</div>
          <div onClick={handleCalculate} className={styles.calculater}>
            >
          </div>
        </div>
      </div>
      <div className={styles.resultBlock}>
        {showResult && (
          <>
            <div>
              {amount.length === 0 ? 1 : amount + selectValueFrom} ={}
            </div>
            <div className={styles.result}>
              {amount * rates.conversion_rates?.RUB}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Converter;
