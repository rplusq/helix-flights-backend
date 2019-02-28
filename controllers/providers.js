const Provider = require('../models/Provider');

//This method will save immediately our object to the database
exports.post = (req, res, next) => {
    const answertime = req.body.answertime;
    const name = req.body.name;

    Providers.create({ //Method provided by sequelize, 

        answertime: answertime,
        name: name,

    }).then(result => {

        console.log(result);
        console.log('Created Providers');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);
}

//This method gets all the Providerss from the database
exports.getAll = (req, res, next) => {
    Provider.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(Provider);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Providers
exports.put = (req, res, next) => {
    const id = req.body.id;
    const updanswertime = req.body.answertime;
    const updname = req.body.name;



    Providers.findByPk(id).then(Providers => {
        Providers.answertime = updanswertime;
        Providers.name = updname;

        return Providers.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Providers')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the Providers of the database
exports.delete = (req, res, next) => {
    const id = req.body.id;

    Providers.findByPk(id)
        .then(Providers => {
            return Providers.destroy();
        })
        .then(result => {
            console.log('Providers deleted successfully');
        })
        .catch(err => console.log(err));
    res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const Providerse = await Providers.findByPk(id);
    res.status(200).json(Providerse);
}


