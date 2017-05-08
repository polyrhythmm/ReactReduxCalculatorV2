
var redux = require('redux');

console.log('Starting redux...');

var actions = require('./actions/actions');
var store = require('./store/configureStore').configure();


var currentState = store.getState();


store.dispatch(actions.changeDisplay("123"));
//
store.dispatch(actions.changeOperator("/"));
//
store.dispatch(actions.changeNumberInit(123));
//
store.dispatch(actions.changeNumber(456));
//
store.dispatch(actions.changeOperatorMode(true));
//
store.dispatch(actions.changeFirstRun(false));

store.dispatch(actions.changeEqualsUsed(true))

store.dispatch(actions.handleEquals())
