const Flights = require('../models/Flight');

exports.getAll = async (req, res, next) => {
    const Flights = await Flights.getAll();
    res.status(200).send({data: flights});
}


//This method will save immediately our object to the database
exports.postFlight = (req,res,next) => 
{
    
    const date= req.body.date;

    Flight.create({ //Method provided by sequelize 
        
        date:date,

    }).then(result => { 
            
        console.log(result);
        console.log('Flight Created');

    }).catch(err =>{ 

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Flight from the database
exports.getFlight = (req,res,next) => 
{
    Flight.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });
    res.status(200).json(Flight);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Flight
exports.putFlight = (req,res,next) =>
{
    const id = req.body.id;
    const upddate= req.body.date;
  
    Flight.findByPk(id).then(Flight=>
        {
            Flight.date = upddate;
            
            return Flight.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Flight')

    }).catch(err =>{ 

        console.log(err);});
        res.sendStatus(200);
}

//This method deletes the Flight of the database
exports.deleteFlight = (req, res, next) => {
    const id = req.body.id;

    Flight.findByPk(id)
      .then(Flight => {
        return Flight.destroy();
      })
      .then(result => {
        console.log('Flight deleted successfully');
      })
      .catch(err => console.log(err));
      res.sendStatus(200);
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const Flight = await Flight.findByPk(id);
    res.status(200).json(cliente);
  }

