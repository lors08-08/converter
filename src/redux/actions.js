export function loadRates(to) {
  return (dispatch) => {
    dispatch({ type: "application/load/start" });
    fetch(
      `https://v6.exchangerate-api.com/v6/162eeaacb04f7f7ac95b96b9/latest/${to}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "application/load/succeed",
          payload: json,
        });
        localStorage.setItem("rates", JSON.stringify(json));
        console.log(json);
      });
  };
}
export function loadMyRates() {
  return (dispatch) => {
    dispatch({ type: "application/loadMyRates/start" });
    fetch("http://localhost:3010/myRates")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "application/loadMyRates/succeed",
          payload: json,
        });
      });
  };
}
export function addCurrency(from, to, result) {
  return (dispatch) => {
    dispatch({ type: "application/addCurrency/start" });
    fetch("http://localhost:3010/myRates", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from,
        to: to,
        result: result,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "application/addCurrency/succeed",
          payload: json,
        });
      });
  };
}

// https://api.exchangeratesapi.io/latest?symbols=${to},${from}
export function setCurrencyFrom(from) {
  return (dispatch) => {
    dispatch({
      type: "application/setCurrencyFrom",
      payload: from,
    });
    localStorage.setItem("selectFrom", from);
  };
}

export function setCurrencyTo(to) {
  return (dispatch) => {
    dispatch({
      type: "application/setCurrencyTo",
      payload: to,
    });
  };
}
