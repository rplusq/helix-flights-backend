const Client = require('../models/Client'); //We import our model

exports.getAll = async (req, res, next) => {
    const clients = await Client.getAll();
    res.status(200).send({data: clients});
}

//This method will save immediately our object to the database
exports.PostClient = (req,res,next) => 
{
    const name= req.body.name;
    const lastname = req.body.lastname;
    const email= req.body.email;

    Client.create({ //Method provided by sequelize, 
        name: name,
        lastname: lastname,
        email: email,

    }).then(result => { 
            
        console.log(result);
        console.log('Created Client');

    }).catch(err =>{ 

        console.log(err);
    });

}

//This method gets all the clients from the database
exports.GetClients = (req,res,next) => 
{
    Client.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Client
exports.postEditClient = (req,res,next) =>
{
    const clientid = req.body.clientid;
    const updname= req.body.name;
    const updlastname = req.body.lastname;
    const updemail= req.body.email;

    Client.findById(clientid).then(client=>
        {
            client.name = updname;
            client.lastname = updlastname;
            client.email= updemail;
            return client.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Client')

    }).catch(err =>{ 

        console.log(err);});
}

exports.postDeleteClient = (req, res, next) => {
    const clienteid = req.body.clienteid;

    Client.findById(prodId)
      .then(cliente => {
        return cliente.destroy();
      })
      .then(result => {
        console.log('DESTROYED PRODUCT');
      })
      .catch(err => console.log(err));
  };


