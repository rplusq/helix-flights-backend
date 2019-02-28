const Maintenance = require('../models/Maintenance');

//This method will save immediately our object to the database
exports.post = (req, res, next) => {
    const name = req.body.name;
    const duration = req.body.duration;

    Maintenance.create({ //Method provided by sequelize 

        name: name,
        duration: duration,

    }).then(result => {

        console.log(result);
        console.log('Maintenance Created');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Maintenance from the database
exports.getAll = (req, res, next) => {
    Maintenance.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });

    res.status(200).json(Maintenance);
}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Maintenance
exports.put = (req, res, next) => {
    const id = req.body.id;
    const updname = req.body.name;
    const updduration = req.body.duration;


    Maintenance.findByPk(id).then(Maintenance => {
        Maintenance.duration = updduration;
        Maintenance.name = updname;

        return Maintenance.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Maintenance')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the Maintenance of the database
exports.delete = (req, res, next) => {
    const id = req.body.id;

    Maintenance.findByPk(id)
        .then(Maintenance => {
            return Maintenance.destroy();
        })
        .then(result => {
            console.log('Maintenance deleted successfully');
        })
        .catch(err => console.log(err));
    res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const Maintenance = await Maintenance.findByPk(id);
    res.status(200).json(cliente);
}
