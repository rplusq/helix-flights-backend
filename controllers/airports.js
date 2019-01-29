const Airport = require('../models/Airport');

exports.getAll = async (req, res, next) => {
    const airports = await Airport.getAll();
    res.status(200).send({data: airports});
}