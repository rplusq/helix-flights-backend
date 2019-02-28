const Itinerary = require('../models/Itinerary');

//This method will save immediately our object to the database
exports.post = (req, res, next) => {

    const duration = req.body.duration;

    Itinerary.create({ //Method provided by sequelize 

        duration: duration,

    }).then(result => {

        console.log(result);
        console.log('Itinerary Created');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Itinerary from the database
exports.getAll = (req, res, next) => {
    Itinerary.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(Itinerary);
}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Itinerary
exports.put = (req, res, next) => {
    const id = req.body.id;
    const updduration = req.body.duration;


    Itinerary.findByPk(id).then(Itinerary => {
        Itinerary.duration = updduration;

        return Itinerary.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Itinerary')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the Itinerary of the database
exports.delete = (req, res, next) => {
    const id = req.body.id;

    Itinerary.findByPk(id)
        .then(Itinerary => {
            return Itinerary.destroy();
        })
        .then(result => {
            console.log('Itinerary deleted successfully');
        })
        .catch(err => console.log(err));
    res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const Itinerary = await Itinerary.findByPk(id);
    res.status(200).json(cliente);
}
