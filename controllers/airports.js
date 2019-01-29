const Airport = require('../models/Airport');

exports.getAll = async (req, res, next) => {
    const airports = await Airport.getAll();
    res.status(200).send({ data: airports });
}

//NOTE: The application will not be able to modify the airport properties
//We can create, get, and delete airports

//This method will save immediately our object to the database
exports.postAirport = (req, res, next) => {
    const iatacode = req.body.iatacode;
    const city = req.body.city;
    const country = req.body.country;
    const landdistance = req.body.landdistance;
    const takeoffdistance = req.body.takeoffdistance;

    Airport.create({ //Method provided by sequelize

        iatacode: iatacode,
        city: city,
        country: country,
        landdistance: landdistance,
        takeoffdistance: takeoffdistance,

    }).then(result => {

        console.log(result);
        console.log('Airport Created succesfully');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Airports from the database
exports.getAirports = (req, res, next) => {
    Airport.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(Airport);
}

//This method will delete the airport of the database
exports.deleteAirport = (req, res, next) => {
    const iatacode = req.body.iatacode;

    Airport.findByPk(iatacode)
        .then(Airport => {
            return Airport.destroy();
        })
        .then(result => {
            console.log('Airport deleted successfully');
        })
        .catch(err => console.log(err));

        res.sendStatus(200);
};

// This method will get a single airport
exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const airport = await Airport.findByPk(id);
    res.status(200).json(airport);
}
