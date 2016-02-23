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

    if (this.state.selectedTabIdx !== null) {
      var form = this.state.tabs[this.state.selectedTabIdx].form;
    } else {
      form = this.state.tabs[0].form
    }

    var tabListItems = this.state.tabs.map(function(tab, index) {
      // TODO: make a tab component
      return (<Tab
                type={tab.type}
                key={index}
                className={index === this.state.selectedTabIdx ? 'selected' : 'notSelected'}
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
