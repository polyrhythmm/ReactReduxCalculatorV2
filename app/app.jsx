
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Calculator = require('Calculator');
//Load foundation-min
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Calculator/>,
    document.getElementById('app')
);
