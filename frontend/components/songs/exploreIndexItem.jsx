// song index item component
//    purpose: display title of song and provide link to song show page
//
//    children: none
//    actions: redirect to song show page on click
//    info: song title

var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// CLASS DEFINITION ----------------------------------------***
var ExploreIndexItem = React.createClass({

  getInitialState: function() {
    return ({
      song: this.props.song
    });
  },

  _onClick: function(event) {
    hashHistory.push('/songs/' + this.state.song.id);
  },

  render: function() {
    return (
      <div onClick={this._onClick} className="songIndexItem">
        {this.state.song.title}
      </div>
    );
  }

});

module.exports = ExploreIndexItem;
