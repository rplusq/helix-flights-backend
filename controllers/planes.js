const Plane = require('../models/Plane');

exports.getAll = async (req, res, next) => {
    const planes = await Plane.getAll();
    res.status(200).send({data: planes});
}



//This method will save immediately our object to the database
exports.postPlane = (req,res,next) => 
{
    const medicalsupplies= req.body.medicalsupplies;
    const crewnumber = req.body.crewnumber;
    const status = req.body.status;

    Plane.create({ //Method provided by sequelize, 
        
        medicalsupplies:medicalsupplies,
        crewnumber:crewnumber,
        status:status,

    }).then(result => { 
            
        console.log(result);
        console.log('Created Plane');

    }).catch(err =>{ 

        console.log(err);
    });

}

//This method gets all the Planes from the database
exports.getPlanes = (req,res,next) => 
{
    Plane.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Plane
exports.postEditPlane = (req,res,next) =>
{
    const licenseplate = req.body.licenseplate;
    const updmedicalsupplies= req.body.medicalsupplies;
    const updcrewnumber = req.body.crewnumber;
    const updstatus= req.body.status;
    

    Plane.findByPk(licenseplate).then(Plane=>
        {
            Plane.medicalsupplies = updmedicalsupplies;
            Plane.crewnumber = updcrewnumber;
            Plane.status= updstatus;

            return Plane.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Plane')

    }).catch(err =>{ 

        console.log(err);});
}

//This method deletes the Plane of the database
exports.postDeletePlane = (req, res, next) => {
    const licenseplate = req.body.id;

    Plane.findByPk(licenseplate)
      .then(Plane => {
        return Plane.destroy();
      })
      .then(result => {
        console.log('Plane deleted successfully');
      })
      .catch(err => console.log(err));
  };


  exports.getById = async (req, res, next) => 
  {
    const licenseplate = req.query.licenseplate;
    const Planee = await Plane.findByPk(licenseplate);
    res.status(200).json(Planee);
  }


