// React requires
var React = require('react');
var ReactDOM = require('react-dom');

var UserForms = require('./components/users/userForms');

var App = React.createClass({

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div>
        <UserForms />
      </div>
    );
  }

});

// Load onto document
document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
});
