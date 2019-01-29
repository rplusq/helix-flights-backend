const Client = require('../models/Client'); //We import our model

exports.getAll = async (req, res, next) => {
    const clients = await Client.getAll();
    res.status(200).send({ data: clients });
}

//This method will save immediately our object to the database
exports.postClient = (req, res, next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;

    Client.create({ //Method provided by sequelize, 
        name: name,
        lastname: lastname,
        email: email,

    }).then(result => {

        console.log(result);
        console.log('Created Client');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);
}

//This method gets all the clients from the database
exports.getClients = (req, res, next) => {
    Client.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(Client);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Client
exports.putClient = (req, res, next) => {
    const id = req.body.id;
    const updname = req.body.name;
    const updlastname = req.body.lastname;
    const updemail = req.body.email;

    Client.findByPk(id).then(client => {
        client.name = updname;
        client.lastname = updlastname;
        client.email = updemail;
        return client.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Client')

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);
}

//This method deletes the Client of the database
exports.deleteClient = (req, res, next) => {
    const id = req.body.id;

    Client.findByPk(id)
        .then(client => {
            return client.destroy();
        })
        .then(result => {
            console.log('Client deleted successfully');
        })
        .catch(err => console.log(err));
        res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const cliente = await Client.findByPk(id);
    res.status(200).json(cliente);
}


