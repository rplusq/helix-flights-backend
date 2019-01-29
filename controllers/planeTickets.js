const PlaneTicketTicket = require('../models/PlaneTicketTicket');

exports.getAll = async (req, res, next) => {
    const PlaneTicketTickets = await PlaneTicketTicket.getAll();
    res.status(200).send({data: PlaneTicketTickets});
}


//This method will save immediately our object to the database
exports.postPlaneTicket = (req,res,next) => 
{
    const assignedseat= req.body.assignedseat;
    const luggagenumber = req.body.luggagenumber;

    PlaneTicket.create({ //Method provided by sequelize, 
        
        luggagenumber:luggagenumber,
        assignedseat:assignedseat,

    }).then(result => { 
            
        console.log(result);
        console.log('Created PlaneTicket');

    }).catch(err =>{ 

        console.log(err);
    });

}

//This method gets all the PlaneTickets from the database
exports.getPlaneTickets = (req,res,next) => 
{
    PlaneTicket.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a PlaneTicket
exports.postEditPlaneTicket = (req,res,next) =>
{
    const id = req.body.id;
    const updassignedseat= req.body.assignedseat;
    const updluggagenumber = req.body.luggagenumber;
    

    PlaneTicket.findByPk(id).then(PlaneTicket=>
        {
            PlaneTicket.assignedseat = updassignedseat;
            PlaneTicket.luggagenumber = updluggagenumber;

            return PlaneTicket.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited PlaneTicket')

    }).catch(err =>{ 

        console.log(err);});
}

//This method deletes the PlaneTicket of the database
exports.postDeletePlaneTicket = (req, res, next) => {
    const id = req.body.id;

    PlaneTicket.findByPk(id)
      .then(PlaneTicket => {
        return PlaneTicket.destroy();
      })
      .then(result => {
        console.log('PlaneTicket deleted successfully');
      })
      .catch(err => console.log(err));
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const PlaneTicket = await PlaneTicket.findByPk(id);
    res.status(200).json(PlaneTicket);
  }


