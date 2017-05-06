var stateDefault = {
  display: "0",
  currentValue:0,
  newValue:0,
  operatorMode: false,
  operator: undefined,
  firstRun: true
}
var redux = require('redux');

console.log('Starting redux...');

var reducer = (state = stateDefault, action) => {
  //state = state || {name: "Anonymous"}

  switch(action.type)
  {
    case "CHANGE_DISPLAY" :
      return {
        ...state,
        display : action.display
      }
    case "CHANGE_OPERATOR":
      return {
        ...state,
        operator: action.operator
      }
    case "CHANGE_NUMBER_INIT":
      return {
        ...state,
        currentValue: action.currentValue
      }
    case "CHANGE_NUMBER":
      return {
        ...state,
        newValue: action.newValue
      }
    case "CHANGE_OPERATOR_MODE":
      return {
        ...state,
        operatorMode: action.operatorMode
      }
    case "HANDLE_EQUALS":
      return {
        ...state
      }
    default:
      return state;
  }

  console.log(action);
}

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);



store.dispatch({
  type: "CHANGE_DISPLAY",
  display: "123"
});

store.dispatch({
  type: "CHANGE_OPERATOR",
  operator: "+"
});

store.dispatch({
  type: "CHANGE_NUMBER_INIT",
  currentValue : 123
});

store.dispatch({
  type: "CHANGE_NUMBER",
    newValue: 456
});

store.dispatch({
  type: "CHANGE_OPERATOR_MODE",
    operatorMode: true
});

store.dispatch({
  type: "HANDLE_EQUALS"
});




console.log('display should 123', store.getState());
