var redux = require('redux');
var {reducer} = require('./../reducers/reducers')

export var configure = () => {
  var store = redux.createStore(reducer, redux.compose (
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store;
}
