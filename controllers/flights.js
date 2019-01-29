const Flights = require('../models/Flight');

exports.getAll = async (req, res, next) => {
    const Flights = await Flights.getAll();
    res.status(200).send({data: flights});
}