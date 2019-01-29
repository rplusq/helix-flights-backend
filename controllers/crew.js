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
    const lastname = req.body.lastname;
    const role = req.body.role;

    Crew.create({ //Method provided by sequelize 
        passport: passport,
        name: name,
        lastname: lastname,
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
exports.putCrew = (req, res, next) => {
    const id = req.body.id;
    const updpassport = req.body.passport;
    const updname = req.body.name;
    const updlastname = req.body.lastname;
    const updrole = req.body.role;

    Crew.findByPk(id).then(Crew => {
        Crew.passport = updpassport;
        Crew.name = updname;
        Crew.lastname = updlastname;
        Crew.role = updrole;
        return Crew.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Crew');
        res.send(result);

    }).catch(err => {
        res.send(err);
        console.log(err);
    });
}

//This method deletes the Crew of the database
exports.deleteCrew = (req, res, next) => {
    const id = req.body.id;

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



