
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Calculator = require('Calculator');
var actions = require('actions');
var store = require("store").configure();

  store.subscribe(() => {
    var state = store.getState();
    console.log(store.getState())
  })


//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Calculator/>
  </Provider>,
    document.getElementById('app')
);

//require('./redux-example.jsx');
//require('./redux-calculator-example')
