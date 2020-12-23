import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Currencies.module.css";
import Star from "../icons/star.svg";
import Favorite from "./Favorite";
import { addCurrency } from "../redux/actions";

function Currencies() {
  const dispatch = useDispatch();

  const currencyFrom = localStorage.getItem("selectFrom");
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

  if (rates === null) {
    return <h2>Выберите валюту</h2>;
  }
  return (
    <div className={styles.list}>
      <Favorite />
      <h1>Курсы валют</h1>
      {options.map((item) => {
        const ratesNew = Object.keys(rates.conversion_rates).find(
          (rate) => rate === item.value
        );
        return (
          <div key={item.label} className={styles.currency}>
            {currencyFrom} > {item.value} ={" "}
            {rates.conversion_rates[item.value] + ratesNew}
            <div>
              <img
                onClick={() => {
                  dispatch(
                    addCurrency(
                      currencyFrom,
                      item.value,
                      rates.conversion_rates[item.value]
                    )
                  );
                }}
                src={Star}
                alt="img"
                width={20}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Currencies;
