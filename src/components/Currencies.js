import React from "react";
import { useSelector } from "react-redux";
import styles from "./Currencies.module.css";
import Loader from "./Loader";

function Currencies(props) {
  const currencyFrom = useSelector((state) => state.application.currencyFrom);
  const rates = useSelector((state) => state.application.rates);
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
  if (rates.conversion_rates === undefined) {
    return <h2>Выберите валюту</h2>;
  }
  return (
    <div className={styles.list}>
      <h1>Курсы валют</h1>
      {options.map((item) => {
        return (
          <div className={styles.currency}>
            {currencyFrom} > {item.value} = {rates.conversion_rates.RUB}
          </div>
        );
      })}
    </div>
  );
}

export default Currencies;
