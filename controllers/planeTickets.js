const PlaneTicket = require('../models/PlaneTicket');

exports.getAll = async (req, res, next) => {
    const planeTickets = await PlaneTicket.getAll();
    res.status(200).send({data: planeTickets});
}