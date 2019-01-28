const Client = require('../models/Client');

exports.getAll = async (req, res, next) => {
    const clients = await Client.getAll();
    res.status(200).json({data: clients});
}

exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const cliente = await Client.findById(id);
    res.status(200).json(cliente);
}