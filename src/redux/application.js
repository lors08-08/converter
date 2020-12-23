const initialState = {
  loading: false,
  rates: {},
  currencyFrom: null,
  currencyTo: null,
};

function application(state = initialState, action) {
  switch (action.type) {
    case "application/load/start":
      return {
        ...state,
        loading: false,
      };
    case "application/load/succeed":
      return {
        ...state,
        rates: action.payload,
        loading: false,
      };
    case "application/setCurrencyFrom":
      return {
        ...state,
        currencyFrom: action.payload,
      };
    case "application/setCurrencyTo":
      return {
        ...state,
        rates: action.payload,
        currencyTo: action.payload,
      };
    default:
      return state;
  }
}

export default application;
