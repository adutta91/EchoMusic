// about info react component
//    purpose: to display a welcome message and a short line about the site
//
//    children: none
//    actions: none
//    info: welcome message and site info

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div className="about">
        <div>
          <h3>Welcome!</h3>
          <p> Explore, share, and follow great music! </p>
        </div>
      </div>
    )
  }
});

module.exports = About;
