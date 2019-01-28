const Client = require('../models/Client');

exports.getAll = async (req, res, next) => {
    const clients = await Client.getAll();
    res.status(200).send({data: clients});
}