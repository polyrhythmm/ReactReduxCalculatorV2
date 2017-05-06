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
//
  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);
