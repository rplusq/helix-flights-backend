const PlaneModel = require('../models/PlaneModel');

//This method will save immediately our object to the database
exports.postPlaneModel = (req, res, next) => {
    const model = req.body.model;
    const fcseats = req.body.fcseats;
    const ecoseats = req.body.ecoseats;
    const maxspeed = req.body.maxspeed;
    const cruisingspeed = req.body.cruisingspeed;
    const emptyweight = req.body.emptyweight;
    const maxweight = req.body.maxweight;
    const internet = req.body.internet;
    const tv = req.body.tv;
    const bathrooms = req.body.bathrooms;
    const exits = req.body.exits;
    const takeoffdistance = req.body.takeoffdistance;
    const landdistance = req.body.landdistance;
    const cabinluggage = req.body.cabinluggage;
    const gasliters = req.body.gasliters;
    const gastype = req.body.gastype;


    PlaneModel.create({ //Method provided by sequelize, 
        model: model,
        fcseats: fcseats,
        ecoseats: ecoseats,
        maxspeed: maxspeed,
        cruisingspeed: cruisingspeed,
        emptyweight: emptyweight,
        maxweight: maxweight,
        internet: internet,
        tv: tv,
        bathrooms: bathrooms,
        exits: exits,
        takeoffdistance: takeoffdistance,
        landdistance: landdistance,
        cabinluggage: cabinluggage,
        gasliters: gasliters,
        gastype: gastype,

    }).then(result => {

        console.log(result);
        console.log('Created PlaneModel');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the PlaneModels from the database
exports.getAll = (req, res, next) => {
    PlaneModel.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });

    res.status(200).json(PlaneModel);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a PlaneModel
exports.putPlaneModel = (req, res, next) => {
    const model = req.body.model;
    const updfcseats = req.body.fcseats;
    const updecoseats = req.body.ecoseats;
    const updmaxspeed = req.body.maxspeed;
    const updcruisingspeed = req.body.cruisingspeed;
    const updemptyweight = req.body.emptyweight;
    const updmaxweight = req.body.maxweight;
    const updinternet = req.body.internet;
    const updtv = req.body.tv;
    const updbathrooms = req.body.bathrooms;
    const updexits = req.body.exits;
    const updtakeoffdistance = req.body.takeoffdistance;
    const updlanddistance = req.body.landdistance;
    const updcabinluggage = req.body.cabinluggage;
    const updgasliters = req.body.gasliters;
    const updgastype = req.body.gastype;


    PlaneModel.findByPk(id).then(PlaneModel => {

        PlaneModel.model = updmodel;
        PlaneModel.fcseats = updfcseats;
        PlaneModel.ecoseats = updecoseats;
        PlaneModel.maxspeed = updmaxspeed;
        PlaneModel.cruisingspeed = updcruisingspeed;
        PlaneModel.emptyweight = updemptyweight;
        PlaneModel.maxweight = updmaxweight;
        PlaneModel.internet = updinternet;
        PlaneModel.tv = updtv;
        PlaneModel.bathrooms = updbathrooms;
        PlaneModel.exits = updexits;
        PlaneModel.takeoffdistance = updtakeoffdistance;
        PlaneModel.landdistance = updlanddistance;
        PlaneModel.cabinluggage = updcabinluggage;
        PlaneModel.gasliters = updgasliters;
        PlaneModel.gastype = updgastype;

        return PlaneModel.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited PlaneModel')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the PlaneModel of the database
exports.deletePlaneModel = (req, res, next) => {
    const id = req.body.id;

    PlaneModel.findByPk(id)
        .then(PlaneModel => {
            return PlaneModel.destroy();
        })
        .then(result => {
            console.log('PlaneModel deleted successfully');
        })
        .catch(err => console.log(err));
    res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const PlaneModele = await PlaneModel.findByPk(id);
    res.status(200).json(PlaneModele);
}


