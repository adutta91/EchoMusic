// footer react component
//    purpose: display info at a fixed position at the bottom of the screen
//
//    children: FooterPlayButton
//    actions: pause and play current song
//    info: current song title and artist


var React = require('react');

// HISTORY
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

// STORES
var SongStore = require('../../stores/songStore');

// REACT COMPONENTS
var FooterPlayButton = require('../songControls/footerPlayButton');
var ProgressBar = require('../songControls/progressBar');

// CLASS DEFINITION ----------------------------------------***
var Footer = React.createClass({

  getInitialState: function() {
    return ({
      showSong: false,
      playing: false
    });
  },

  componentDidMount: function() {
    this.listener = SongStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  // re-assesses whether it should show a song that is playing
  _onChange: function() {
    if (SongStore.currentSong() !== null) {
      this.setState({showSong: true});
    } else {
      this.setState({showSong: false});
    }
  },

  _songClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    songId = SongStore.currentSong().id;
    hashHistory.push('/songs/' + songId);
  },

  _artistClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    hashHistory.push('/artists/' + SongStore.currentSong().artist_id);
  },

  // composes the information for when a song is playing
  showPlaying: function() {
    var display = "";
    if (this.state.showSong) {
      if (SongStore.loading()){
        display = (
          <div className="footerDisplay">
            <span className="nowPlaying">
              Loading... {SongStore.currentSong().title}
            </span>
            <FooterPlayButton />
          </div>
        )
      } else {
        display = (
          <div className="footerDisplay">
            <span className="nowPlaying" onClick={this._songClick}>
              Now playing: {SongStore.currentSong().title} - &nbsp;
                <span className="footerArtist" onClick={this._artistClick}>
                  ({SongStore.currentSong().artist_name})
                </span>
            </span>
            <ProgressBar />
            <FooterPlayButton />
          </div>
        );
      }
    }
    return display;
  },

  render: function() {
    return (
      <div className="footer">
        {this.showPlaying()}
      </div>
    );
  }

});

module.exports = Footer;
