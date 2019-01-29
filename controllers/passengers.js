const Passenger = require('../models/Passenger');

exports.getAll = async (req, res, next) => {
    const passengers = await Passenger.getAll();
    res.status(200).send({data: passengers});
}