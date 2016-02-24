var React = require('react');

var Tab = require('./tab');
var SignInForm = require('./signInForm');
var SignUpForm = require('./signUpForm');


var tabs = [
  {type: "Sign In", form: <SignInForm />},
  {type: "Sign Up", form: <SignUpForm />}
]

var UserForms = React.createClass({
  getInitialState: function() {
    return({
      tabs: tabs,
      selectedTabIdx: null
    })
  },

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
      <div>
        <ul className="group">
          {tabListItems}
        </ul>
        {form}
      </div>
    );
  }
});



module.exports = UserForms;
