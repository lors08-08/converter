import React from "react";
import { useSelector } from "react-redux";
import styles from "./Currencies.module.css";

function Favorite() {
  const myRates = useSelector((state) => state.application.myRates);

  if (myRates.length === 0) {
    return (
      <>
        <h1>Мои валюты</h1>
        <div>Нету добавленных валют</div>
      </>
    );
  }
  return (
    <>
      <h1>Мои валюты</h1>
      {myRates.map((item) => {
        return (
          <div key={item.id} className={styles.currency}>
            {item.from} > {item.to} ={item.result}
          </div>
        );
      })}
    </>
  );
}

export default Favorite;
