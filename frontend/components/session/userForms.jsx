// user forms component
//    purpose: provide appropriate forms based on selected tab
//
//    children: Tab, SignInForm / SignUpForm
//    actions: display forms
//    info: type of form / session created

var React = require('react');

// REACT COMPONENTS
var Tab = require('./tab');
var SignInForm = require('./signInForm');
var SignUpForm = require('./signUpForm');

// POSSIBLE TYPE OF FORMS (CONSTANTS)
var TABS = [
  {type: "Sign In", form: <SignInForm />},
  {type: "Sign Up", form: <SignUpForm />}
]

// CLASS DEFINITION ----------------------------------------***
var UserForms = React.createClass({
  getInitialState: function() {
    return({
      tabs: TABS,
      selectedTabIdx: null
    })
  },

  // finds current tab clicked
  tabClicked: function(index, event) {
    this.setState( { selectedTabIdx: index } )
  },

  render: function() {

    // finds correct form to display; defaults to 'sign in' form
    if (this.state.selectedTabIdx !== null) {
      var form = this.state.tabs[this.state.selectedTabIdx].form;
    } else {
      form = this.state.tabs[0].form
    }

    var tabListItems = this.state.tabs.map(function(tab, index) {
      // finds appropriate css class to assign to the tab
      var tabClass = 'notSelected';
      if ((this.state.selectedTabIdx === null && index === 0) ||
            (this.state.selectedTabIdx === index)) {
        tabClass = 'selected';
      }
      // creates tab component
      return (<Tab
                type={tab.type}
                key={index}
                className={"tab " + tabClass}
                tabCallback={this.tabClicked.bind(this, index)}
              />
             );
    }.bind(this));

    return (
      <div className="welcomeForms">
        <div className="tabs group">
          {tabListItems}
        </div>
        <div className="forms">
          {form}
        </div>
      </div>
    );
  }
});



module.exports = UserForms;
