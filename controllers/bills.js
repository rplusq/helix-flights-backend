const Bill = require('../models/FlightTicket');

//This method will save immediately our object to the database
exports.postFlightTicket = (req, res, next) => {

    const initalprice = req.body.initalprice;
    const purchasedate = req.body.purchasedate;
    const discounttype = req.body.discounttype;

    FlightTicket.create({ //Method provided by sequelize 

        initalprice: initalprice,
        purchasedate: purchasedate,
        discounttype: discounttype,

    }).then(result => {

        console.log(result);
        console.log('FlightTicket Created');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the FlightTicket from the database
exports.getAll = (req, res, next) => {
    FlightTicket.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(FlightTicket);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a FlightTicket
exports.putFlightTicket = (req, res, next) => {
    const id = req.body.id;
    const updinitialprice = req.body.initalprice;
    const updpurchasedate = req.body.purchasedate;
    const upddiscounttype = req.body.discounttype;

    FlightTicket.findByPk(id).then(FlightTicket => {
        FlightTicket.initalprice = updinitialprice;
        FlightTicket.purchasedate = updpurchasedate;
        FlightTicket.discounttype = upddiscounttype;

        return FlightTicket.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited FlightTicket')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the FlightTicket of the database
exports.deleteFlightTicket = (req, res, next) => {
    const id = req.body.id;

    FlightTicket.findByPk(id)
        .then(FlightTicket => {
            return FlightTicket.destroy();
        })
        .then(result => {
            console.log('FlightTicket deleted successfully');
        })
        .catch(err => console.log(err));
        res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const FlightTicket = await FlightTicket.findByPk(id);
    res.status(200).json(FlightTicket);
}
