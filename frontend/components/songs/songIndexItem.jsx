var React = require('react');
var History = require('react-router').History;


var SongIndexItem = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({
      song: this.props.song
    });
  },

  _onClick: function(event) {
    this.history.push('/api/songs/' + this.state.song.id);
  },

  render: function() {
    return (
      <div onClick={this._onClick} className="songIndexItem">
        {this.state.song.title}
      </div>
    );
  }

});

module.exports = SongIndexItem;
