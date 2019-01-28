const PlaneMaintenance = require('../models/PlaneMaintenance');

exports.getAll = async (req, res, next) => {
    const maintenances = await PlaneMaintenance.getAll();
    res.status(200).send({data: maintenances});
}