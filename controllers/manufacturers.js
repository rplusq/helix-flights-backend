const Manufacturer = require('../models/Manufacturer');

exports.getAll = async (req, res, next) => {
    const manufacturers = await Manufacturer.getAll();
    res.status(200).send({data: manufacturers});
}


//This method will save immediately our object to the database
exports.postManufacturer = (req,res,next) => 
{
    const name= req.body.name;
    const country= req.body.country;
    
    Manufacturer.create({ //Method provided by sequelize 
        
        name:name,
       duration: duration,

    }).then(result => { 
            
        console.log(result);
        console.log('Manufacturer Created');

    }).catch(err =>{ 

        console.log(err);
    });

}

//This method gets all the Manufacturer from the database
exports.getManufacturer = (req,res,next) => 
{
    Manufacturer.findAll().then( 

        //Here we have to code where do we want the results to render

    ).catch(err =>{ 

        console.log(err);
    });

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Manufacturer
exports.postEditManufacturer = (req,res,next) =>
{
    const id = req.body.id;
    const updname = req.body.name;
    const updcountry= req.body.country;


    Manufacturer.findByPk(id).then(Manufacturer=>
        {
            Manufacturer.country = updcountry;
            Manufacturer.name= updname;

            return Manufacturer.save();
        }

    ).then(result => { 
            
        console.log(result);
        console.log('Edited Manufacturer')

    }).catch(err =>{ 

        console.log(err);});
}

//This method deletes the Manufacturer of the database
exports.postDeleteManufacturer = (req, res, next) => {
    const id = req.body.id;

    Manufacturer.findByPk(id)
      .then(Manufacturer => {
        return Manufacturer.destroy();
      })
      .then(result => {
        console.log('Manufacturer deleted successfully');
      })
      .catch(err => console.log(err));
  };


  exports.getById = async (req, res, next) => 
  {
    const id = req.query.id;
    const Manufacturer = await Manufacturer.findByPk(id);
    res.status(200).json(cliente);
  }
