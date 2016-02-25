var React = require('react');

var SongStore = require('../../stores/songStore');

var SongProfile = React.createClass({

  getInitialState: function() {
    return ({
      song: {title: ""}
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
        <source src="http://res.cloudinary.com/dzyfczxnr/video/upload/v1456429585/z0nuupfcvb95pbgzzoom.m4a" type="audio/mp4"/>
      </div>
    );
  }
});

module.exports = SongProfile;
