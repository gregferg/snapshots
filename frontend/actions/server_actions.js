var Dispatcher = require('../dispatcher/dispatcher.js');
 // Example Constants call
 // var PokemonConstants = require('../constants/pokemonConstants.js');

var ServerActions = {
  receiveAlbums: function (albums) {
    Dispatcher.dispatch({
      actionType: "RECEIVE_ALBUMS",
      albums: albums
    });
  }
// Example Function
// receiveAllPokemons: function (pokemons) {
// Dispatcher.dispatch({
// actionType: PokemonConstants.POKEMONS_RECEIVED,
// pokemons: pokemons
// });
// }
};

 module.exports = ServerActions;
