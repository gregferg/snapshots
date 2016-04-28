var ServerActions = require("../actions/server_actions.js");

var ApiUtil = {
  fetchAlbums: function(username) {
    $.ajax({
      type: 'GET',
      url: 'api/albums',
      data: {username: username},
      success: function(albums) {
        ServerActions.receiveAlbums(albums);
      }
    });
  }
};

module.exports = ApiUtil;
