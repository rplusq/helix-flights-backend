const PlaneModel = require('../models/PlaneModel');

exports.getAll = async (req, res, next) => {
    const planeModels = await PlaneModel.getAll();
    res.status(200).send({data: planeModels});
}