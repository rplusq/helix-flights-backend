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
exports.post = (req, res, next) => {
    const iata_code = req.body.iata_code;
    const city = req.body.city;
    const country = req.body.country;
    const land_distance = Number(req.body.land_distance);
    const takeoff_distance = Number(req.body.takeoff_distance);

    Airport.create({ //Method provided by sequelize

        iata_code: iata_code,
        city: city,
        country: country,
        land_distance: land_distance,
        takeoff_distance: takeoff_distance,

    }).then(result => {

        console.log(result);
        console.log('Airport Created succesfully');
        res.send(result);
    }).catch(err => {
        console.log(err);
    });
}

//This method gets all the Airports from the database
exports.getAll = (req, res, next) => {
    Airport.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.json(Airport);
}

//This method will delete the airport of the database
exports.delete = (req, res, next) => {
    console.log(req.query, req.params);
    
    const iata_code = req.params.iata_code;

    Airport.findByPk(iata_code)
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
exports.update = async (req, res, nex) => {
    try {
        const airport = await Airport.findByPk(req.body.iata_code);
        let end = await airport.update(req.body);
        res.send(end);
    } catch (error) {
        console.log(error);

    }
}