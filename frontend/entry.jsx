// React requires
var React = require('react');
var ReactDOM = require('react-dom');

var UserForm = require('./components/users/user_form');

var App = React.createClass({

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div>
        Huzzah!
      </div>
    );
  }

});

// Load onto document
document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
