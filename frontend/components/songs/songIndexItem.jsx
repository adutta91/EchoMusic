var React = require('react');


var SongIndexItem = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return ({
      song: this.props.song
    });
  },

  _onClick: function(event) {
    this.context.router.push('/songs/' + this.state.song.id);
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
