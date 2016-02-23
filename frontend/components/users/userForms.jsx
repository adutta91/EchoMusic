var React = require('react');
var SignInForm;
var SignUpForm;


var testOne = React.createClass({
  render: function() {
    return (
      <div>Hallo</div>
    )
  }
});

var testTwo = React.createClass({
  render: function() {
    return (
      <div>Hallo Der</div>
    )
  }
});

var tabs = [
  {type: "Sign In", form: testOne},
  {type: "Sign Up", form: testTwo}
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
    var form = findForm.bind(this);

    var tabListItems = this.state.tabs.map(function(tab, index) {
      // TODO: make a tab component
      return (<div className="tab">{tab.type}</div>);
    });

    return (
      <div>
        <ul className="group">
          {tabListItems}
        </ul>
        <div>
          {form}
        </div>
      </div>
    );
  }
});

var findForm = function(selectedTabIdx) {
  if (this.state.selectedTabIdx !== null) {
    var form = this.state.tabs[this.state.selectedTabIdx].form;
  } else {
    form = this.state.tabs[0].form
  }
  return form
};


module.exports = UserForms;
