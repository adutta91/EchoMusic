var React = require('react');

var SongIndexItem = React.createClass({

  getInitialState: function() {
    return ({
      song: this.props.song
    });
  },

  render: function() {
    return (
      <div className="songIndexItem">
        {this.state.song.title}
      </div>
    );
  }

});

module.exports = SongIndexItem;
