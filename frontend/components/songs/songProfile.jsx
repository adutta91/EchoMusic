var React = require('react');

var SongStore = require('../../stores/songStore');

var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {
        title: "",
        audio_url: ""
      }
    });
  },

  getStateFromStore: function() {
    var song =  SongStore.find(this.props.params.id);
    if (song) {
      this.setState( { song: SongStore.find(this.props.params.id) });
    }
  },

  componentDidMount: function() {
    this.getStateFromStore();
  },

  render: function() {
    return (
      <div className="songTitleDisplay">
        {this.state.song.title}
        <audio src={this.state.song.audio_url}
               controls/>
      </div>
    );
  }
});

module.exports = SongProfile;
