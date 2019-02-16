const Crew = require('../models/Crew');

exports.getAll = async (req, res, next) => {
    try {
        const crew = await Crew.findAll();
        res.json(crew);
    } catch (error) {
        console.log(error);
    }
}

//This method will save immediately our object to the database
exports.postCrew = (req, res, next) => {
    const passport = Number(req.body.passport);
    const name = req.body.name;
    const last_name = req.body.last_name;
    const role = req.body.role;

    Crew.create({ //Method provided by sequelize 
        passport: passport,
        name: name,
        last_name: last_name,
        role: role,

    }).then(result => {

        console.log(result);
        console.log('Crew Created');

        res.send(result);

    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Crew
exports.putCrew = async (req, res, next) => {
    try {
        const id = req.body.id;

        const person = await Crew.findByPk(id);

        const result = await person.update(req.body);
        console.log(result);
        console.log('Edited Crew');
        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};


//This method deletes the Crew of the database
exports.deleteCrew = (req, res, next) => {
    const id = req.params.id;

    Crew.findByPk(id)
        .then(Crew => {
            return Crew.destroy();
        })
        .then(result => {
            res.send(result);
            console.log('Crew deleted successfully');
        })
        .catch(err => {
            res.send(err);
            console.log(err);
        });
};


exports.getById = async (req, res, next) => {
    try {
        const id = req.query.id;
        const crew = await Crew.findByPk(id);
        res.json(crew);
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}



