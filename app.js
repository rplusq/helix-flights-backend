const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); //Database name 
const app = express();

app.set('view engine','ejs');
app.set('views','views');

/*Path definition for every model
const Airport = require('./models/airport');
const Client = require('./models/client');
const Crew = require('./models/crew');
const Flight = require('./models/flight');
const FlightTicket = require('./models/flightticket');
const Itinerary = require('./models/itinerary');
const Manufacturer = require('./models/manufacturer');
const Passenger = require('./models/passenger');
const Plane = require('./models/plane');
const PlaneMaintenance = require('./models/planemaintenance');
const PlaneModel = require('./models/planemodel');
const PlaneTicket = require('./models/planeticket');
const Provider = require('./models/provider');*/
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(shopRoutes);
app.use(errorController.get404);


/*/This method is used to 
sequelize.sync()    //Looks at all the models we defined, and creates the tables, atributes and relations we need.

.then(result => {
    console.log(result); 
    app.listen(3306);
  
  })
.catch(err => {   
           
    console.log(err);

  });*/
  app.use((req, res, next) => {
    User.findById(1)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
  
  app.use(errorController.get404);
  

  sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
      
      console.log(result);
      app.listen(3000);
    })
    .catch(err => {
      console.log(err);
    });