const Airport = require('../models/Airport');

exports.getAll = async (req, res, next) => {
    try {
        const airports = await Airport.findAll();
        res.json(airports);
    } catch (error) {
        console.log(error);
    }
}

//NOTE: The application will not be able to modify the airport properties
//We can create, get, and delete airports

//This method will save immediately our object to the database
exports.postAirport = (req, res, next) => {
    const iatacode = req.body.iatacode;
    const city = req.body.city;
    const country = req.body.country;
    const landdistance = Number(req.body.landdistance);
    const takeoffdistance = Number(req.body.takeoffdistance);

    Airport.create({ //Method provided by sequelize

        iatacode: iatacode,
        city: city,
        country: country,
        landdistance: landdistance,
        takeoffdistance: takeoffdistance,

    }).then(result => {

        console.log(result);
        console.log('Airport Created succesfully');
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

//This method gets all the Airports from the database
exports.getAirports = (req, res, next) => {
    Airport.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.json(Airport);
}

//This method will delete the airport of the database
exports.deleteAirport = (req, res, next) => {
    console.log(req.query, req.params);
    
    const iatacode = req.params.iatacode;

    Airport.findByPk(iatacode)
        .then(airport => {
            console.log(airport);
            
            return airport.destroy();
        })
        .then(result => {
            console.log('Airport deleted successfully');
            res.send(result);
        })
        .catch(err => console.log(err));

};

// This method will get a single airport
exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const airport = await Airport.findByPk(id);
    res.json(airport);
}

// Update an airport
exports.updateAirport = async (req, res, nex) => {
    try {
        const airport = await Airport.findByPk(req.body.iatacode);
        let end = await airport.update(req.body);
        res.send(end);
    } catch (error) {
        console.log(error);

    }
}