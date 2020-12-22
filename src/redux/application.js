const initialState = {
  loading: false,
  rates:[]
};

function application(state = initialState, action) {
  switch (action.type) {
    case "application/load/start":
      return {
        ...state,
        loading: true,
      }
    case "application/load/succeed":
      return {
        ...state,
        rates: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default application;
