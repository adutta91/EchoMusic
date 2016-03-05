// style specifications for modal form

// TODO: (move to appropriate place)

style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(50, 50, 50, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '25%',
    left                       : '25%',
    right                      : '25%',
    bottom                     : '25%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
  }
}

module.exports = style;
