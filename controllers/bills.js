const Bill = require('../models/Bill');

//This method will save immediately our object to the database
exports.post = (req, res, next) => {

    const initalprice = req.body.initalprice;
    const purchasedate = req.body.purchasedate;
    const discounttype = req.body.discounttype;

    Bill.create({ //Method provided by sequelize 

        initalprice: initalprice,
        purchasedate: purchasedate,
        discounttype: discounttype,

    }).then(result => {

        console.log(result);
        console.log('Bill Created');

    }).catch(err => {

        console.log(err);
    });

    res.sendStatus(200);

}

//This method gets all the Bill from the database
exports.getAll = (req, res, next) => {
    Bill.findAll().then(

        //Here we have to code where do we want the results to render

    ).catch(err => {

        console.log(err);
    });
    res.status(200).json(Bill);

}

//To find specific data with the where condition, tutorial 152

//This method edits  and updates the attributes of a Bill
exports.put = (req, res, next) => {
    const id = req.body.id;
    const updinitialprice = req.body.initalprice;
    const updpurchasedate = req.body.purchasedate;
    const upddiscounttype = req.body.discounttype;

    Bill.findByPk(id).then(Bill => {
        Bill.initalprice = updinitialprice;
        Bill.purchasedate = updpurchasedate;
        Bill.discounttype = upddiscounttype;

        return Bill.save();
    }

    ).then(result => {

        console.log(result);
        console.log('Edited Bill')

    }).catch(err => {

        console.log(err);
    });
    res.sendStatus(200);
}

//This method deletes the Bill of the database
exports.delete = (req, res, next) => {
    const id = req.body.id;

    Bill.findByPk(id)
        .then(Bill => {
            return Bill.destroy();
        })
        .then(result => {
            console.log('Bill deleted successfully');
        })
        .catch(err => console.log(err));
        res.sendStatus(200);
};


exports.getById = async (req, res, next) => {
    const id = req.query.id;
    const Bill = await Bill.findByPk(id);
    res.status(200).json(Bill);
}

