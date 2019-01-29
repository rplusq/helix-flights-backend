const Crew = require('../models/Crew');

exports.getAll = async (req, res, next) => {
    const crew = await Crew.getAll();
    res.status(200).send({data: crew});
}

//This method will save immediately our object to the database
exports.postCrew = (req,res,next) => 
{
    const passport= req.body.passport;
    const name= req.body.name;
    const lastname = req.body.lastname;
    const role= req.body.role;

    Crew.create({ //Method provided by sequelize 
        
        passport : passport,
        name: name,
        lastname: lastname,
        role: role,

    }).then(result => { 
            
        console.log(result);
        console.log('Crew Created');

    }).catch(err =>{ 

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Crew from the database
exports.getCrew = (req,res,next) => 
{
    Crew.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });
    res.status(200).json(Crew);
}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Crew
exports.putCrew = (req,res,next) =>
{
    const id = req.body.id;
    const updpassport = req.body.passport;
    const updname= req.body.name;
    const updlastname = req.body.lastname;
    const updrole= req.body.role;

    Crew.findByPk(id).then(Crew=>
        {
            Crew.passport=updpassport;
            Crew.name = updname;
            Crew.lastname = updlastname;
            Crew.role= updrole;
            return Crew.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Crew')

    }).catch(err =>{ 

        console.log(err);});
        res.sendStatus(200);
}

//This method deletes the Crew of the database
exports.deleteCrew = (req, res, next) => {
    const id = req.body.id;

    Crew.findByPk(id)
      .then(Crew => {
        return Crew.destroy();
      })
      .then(result => {
        console.log('Crew deleted successfully');
      })
      .catch(err => console.log(err));
      res.sendStatus(200);
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const Crew = await Crew.findByPk(id);
    res.status(200).json(cliente);
  }



