import React from "react";
import { useSelector } from "react-redux";
import styles from "./Currencies.module.css";
import Star from "../icons/star.svg";

function Favorite() {
  const myRates = useSelector((state) => state.application.myRates);
  const loading = useSelector((state) => state.application.loadingMyRates);

  if (myRates.length === 0) {
    return (
      <>
        <h1>Мои валюты</h1>
        <div>Нету добавленных валют</div>
      </>
    );
  }
  console.log(myRates);
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
