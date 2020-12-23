export function loadRates(to) {
  return (dispatch) => {
    dispatch({ type: "application/load/start" });
    fetch(`https://v6.exchangerate-api.com/v6/162eeaacb04f7f7ac95b96b9/latest/${to}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "application/load/succeed",
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
      payload:from
    });
  };
}

export function setCurrencyTo(to) {
  return (dispatch) => {
    dispatch({
      type: "application/setCurrencyTo",
      payload:to
    });
  };
}

