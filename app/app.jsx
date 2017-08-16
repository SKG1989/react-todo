var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// Add CSS
require('style!css!sass!applicationStyles');



ReactDOM.render(
   <p>BoilerPlate 3 Project</p>,
  document.getElementById('app')
);
