import React, { useState } from "react";
import styles from "./Converter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadRates, setCurrencyFrom, setCurrencyTo } from "../redux/actions";
import Select from "react-select";

function Converter() {
  const dispatch = useDispatch();

  const rates = useSelector((state) => state.application.rates);
  const loading = useSelector((state) => state.application.loading);

  const [showError, setShowError] = useState(false);
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
    dispatch(loadRates(selectValueFrom.toString()));
  };

  const handleCalculate = () => {
    if (selectValueFrom.length && selectValueTo.length && !loading > 0) {
      setShowResult(true);
      setShowError(false);
    }
    {
      setShowError(true);
    }
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
            placeholder="Выбрать валюту"
            onChange={handleChangeSelectFrom}
            className={styles.select}
            options={options}
          />
        </div>
        <div>
          <div className={styles.title}>Конвертировать в</div>
          <Select
            placeholder="Выбрать валюту"
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
              {amount * rates.conversion_rates?.[selectValueTo]}
            </div>
          </>
        )}
        {showError === false && (
          <div className={styles.error}>Выберите валюту</div>
        )}
      </div>
    </div>
  );
}

export default Converter;
