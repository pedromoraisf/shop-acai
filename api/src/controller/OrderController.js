const STORE = require("./../model/store");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description Retorna todos os registros salvos na model
 */
const viewAllOrders = (req, res) => {
  return res.json({
    r: STORE.GET_STORE()
  });
};


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @description Salva um registro de pedido na store da model
 */
const storeOrder = (req, res) => {

  const { data } = req.body;

  if (STORE.SET_STORE(data) <= 0) {

    return res.status(503).json({
      r: `Erro ao inserir o registro na store`
    });

  } else {

    return res.json({
      r: `Registro inserido com sucesso`
    });

  }

};

module.exports = {
  viewAllOrders,
  storeOrder
}