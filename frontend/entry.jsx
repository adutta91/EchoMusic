// React requires
var React = require('react');
var ReactDOM = require('react-dom');

var UserForms = require('./components/users/userForms');



var App = React.createClass({

  getInitialState: function() {
    return ({
      display: <UserForms />
    })
  },

  componentDidMount: function() {
    // check if logged in, if so, change 'display'
  },

  render: function() {
    return (
      <div>
        {this.state.display}
      </div>
    );
  }

});

// Load onto document
document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector("#root");
  var welcome = document.querySelector("#welcome");

  if (root !== null) {
    ReactDOM.render(<App />, root);
  } else {
    ReactDOM.render(<App />, welcome);
  }
});
