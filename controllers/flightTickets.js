const FlightTicket = require('../models/FlightTicket');

exports.getAll = async (req, res, next) => {
    const flightTickets = await FlightTicket.getAll();
    res.status(200).send({data: flightTickets});
}