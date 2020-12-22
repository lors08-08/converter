export function loadRates(name) {
  return (dispatch) => {
    dispatch({ type: "application/load/start" });
    fetch(`https://api.exchangeratesapi.io/latest?base=${name}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "application/load/succeed",
          payload: json,
        });
      });
  };
}
