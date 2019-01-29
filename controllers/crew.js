const Crew = require('../models/Crew');

exports.getAll = async (req, res, next) => {
    const crew = await Crew.getAll();
    res.status(200).send({data: crew});
}



