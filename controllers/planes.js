const Plane = require('../models/Plane');

exports.getAll = async (req, res, next) => {
    const planes = await Plane.getAll();
    res.status(200).send({data: planes});
}