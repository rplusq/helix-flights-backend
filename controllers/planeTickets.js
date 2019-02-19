const Ticket = require('../models/Ticket');

//This method will save immediately our object to the database
exports.postTicket = (req,res,next) => 
{
    const assignedseat= req.body.assignedseat;
    const luggagenumber = req.body.luggagenumber;

    Ticket.create({ //Method provided by sequelize, 
        
        luggagenumber:luggagenumber,
        assignedseat:assignedseat,

    }).then(result => { 
            
        console.log(result);
        console.log('Created Ticket');

    }).catch(err =>{ 

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Tickets from the database
exports.getAll = (req,res,next) => 
{
    Ticket.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });
    res.status(200).json(Ticket);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Ticket
exports.putTicket = (req,res,next) =>
{
    const id = req.body.id;
    const updassignedseat= req.body.assignedseat;
    const updluggagenumber = req.body.luggagenumber;
    

    Ticket.findByPk(id).then(Ticket=>
        {
            Ticket.assignedseat = updassignedseat;
            Ticket.luggagenumber = updluggagenumber;

            return Ticket.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Ticket')

    }).catch(err =>{ 

        console.log(err);});
        res.sendStatus(200);
}

//This method deletes the Ticket of the database
exports.deleteTicket = (req, res, next) => {
    const id = req.body.id;

    Ticket.findByPk(id)
      .then(Ticket => {
        return Ticket.destroy();
      })
      .then(result => {
        console.log('Ticket deleted successfully');
      })
      .catch(err => console.log(err));
      res.sendStatus(200);
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const Ticket = await Ticket.findByPk(id);
    res.status(200).json(Ticket);
  }


