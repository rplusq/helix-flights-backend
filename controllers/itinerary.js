const Itinerary = require('../models/Itinerary');

exports.getAll = async (req, res, next) => {
    const itinerary = await Itinerary.getAll();
    res.status(200).send({data: itinerary});
}