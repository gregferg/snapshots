module.exports = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex         : 10,
  },
  content : {
    position        : 'fixed',

    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    opacity         : '0',
    transition      : 'opacity .7s',

    top             : '38%',
    marginLeft : 'auto',
    marginRight : 'auto',
    bottom          : '43%',
    width : '450px'

  }
};
