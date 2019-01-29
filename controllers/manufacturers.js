const Manufacturer = require('../models/Manufacturer');

exports.getAll = async (req, res, next) => {
    const manufacturers = await Manufacturer.getAll();
    res.status(200).send({data: manufacturers});
}