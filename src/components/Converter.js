import React, { useState } from "react";
import styles from "./Converter.module.css";

function Converter(props) {
  const [selectFrom, setSelectFrom] = useState(false);
  const [selectValueFrom, setSelectValueFrom] = useState("");
  const handleSelectFrom = () => {
    setSelectFrom(true);
  };
  const handleChangeSelectFrom = (e) => {
    setSelectValueFrom(e.currentTarget.textContent)
    setSelectFrom(false);
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

  return (
    <div className={styles.box}>
      <div>
        <div className={styles.title}>Количество</div>
        <input />
      </div>
      <div>
        <div className={styles.title}>Конвертировать из</div>
        <input defaultValue={selectValueFrom} onClick={handleSelectFrom} />
        {selectFrom && <div className={styles.select}>
          <div onClick={handleChangeSelectFrom}>USD</div>
          <div onClick={handleChangeSelectFrom}>EUR</div>
        </div>}
      </div>
      <div>
        <div className={styles.title}>Конвертировать в</div>
        <input defaultValue={selectValueTo} onClick={handleSelectTo} />
        {selectTo && <div className={styles.select}>
          <div onClick={handleChangeSelectTo}>USD</div>
          <div onClick={handleChangeSelectTo}>EUR</div>
        </div>}
      </div>
      <div>
        <div className={styles.title}>Рассчитать</div>
        <div className={styles.calculater}>></div>
      </div>
    </div>
  );
}

export default Converter;
