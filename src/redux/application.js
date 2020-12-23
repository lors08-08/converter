const localData = JSON.parse(localStorage.getItem("rates"));
console.log(localData);
const initialState = {
  loading: false,
  loadingMyRates: false,
  rates: localData,
  currencyFrom: null,
  currencyTo: null,
  myRates: [],
};

function application(state = initialState, action) {
  switch (action.type) {
    case "application/load/start":
      return {
        ...state,
        loading: true,
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
    case "application/loadMyRates/start":
      return {
        ...state,
        loadingMyRates: true,
      };
    case "application/loadMyRates/succeed":
      return {
        ...state,
        loadingMyRates: false,
        myRates: action.payload,
      };
    case "application/addCurrency/start":
      return {
        ...state,
        loadingMyRates: true,
      };
    case "application/addCurrency/succeed":
      return {
        ...state,
        loadingMyRates: false,
        myRates: [...state.myRates, action.payload],
      };
    default:
      return state;
  }
}

export default application;
