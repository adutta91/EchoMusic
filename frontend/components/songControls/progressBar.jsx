// progress bar component
//    purpose: provide info on song duration and allow user to move around the
//             song
//
//    children: none
//    actions: change _audio 'currentTime' value
//    info: current location in song

var React = require('react');

// STORES
var SongStore = require('../../stores/songStore');

var ProgressBar = React.createClass({

  getInitialState: function() {
    return ({
      duration: Math.floor(SongStore.duration()),
      currentTime: SongStore.currentTime()
    })
  },

  slide: function(event) {
    event.preventDefault();
    SongStore.setTime(event.target.value);
  },

  componentDidMount: function() {
    this.interval = setInterval(this.updateTime, 250);
    this.songListener = SongStore.addListener(this.updateTime);
  },

  componentWillUnmount: function() {
    this.songListener.remove();
    clearInterval(this.interval);
  },

  updateTime: function() {
    this.setState({ currentTime: SongStore.currentTime() })
  },

  render: function() {
    var style = {
      width: "250px"
    }
    var max = this.state.duration.toString();
    return (
      <input className="progressBar"
             type="range"
             min="0"
             max={max}
             value={this.state.currentTime}
             onChange={this.slide}/>
    )
  }
});

module.exports = ProgressBar;
