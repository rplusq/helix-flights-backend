const Provider = require('../models/Provider');

exports.getAll = async (req, res, next) => {
    const providers = await Provider.getAll();
    res.status(200).send({data: providers});
}