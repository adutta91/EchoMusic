// Login app component
//    purpose: display sign in and sign up forms for new visitors
//
//    children: UserForms

var React = require('react');

// REACT COMPONENTS
var UserForms = require('./userForms');


// CLASS DEFINITION ----------------------------------------***
var LogIn = React.createClass({
  render: function() {
    return (
      <div className="logInPage">
        <div className="userForms">
        <UserForms />
        </div>
      </div>
    );
  }
});

module.exports = LogIn;
