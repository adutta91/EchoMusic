// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// find the root of the static_page

var App = React.createClass({
  render: function() {
    return (
      <div>
        Huzzah!!!!!
      </div>
    );
  }
});

// Load onto document
document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
