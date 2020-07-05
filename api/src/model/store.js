/**
 * Model fictícia, apenas para armezenar em tempo de execução os valores vindos do frontend
 */
let STORE = [];

module.exports = {
  SET_STORE: function (payload) {
    return STORE.push(payload);
  }, 
  GET_STORE: () => {
    return STORE;
  }
};