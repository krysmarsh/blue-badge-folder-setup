require("dotenv").config();
let express =  require('express');
let app = express();
// ***** ADD LINE BELOW
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
//***** Add 2 lines below *****
sequelize.sync();
//sequelize.sync({force: true})
app.use(require('./middleware/headers'));

app.use(express.json());

/*********
 * Exposed route
 */
 app.use('/user', user);

 /*******
  * Protected Route
  */
 //app.use(require('./middleware/validate.session'));
app.use('/journal', journal);


app.listen(3007, function() {
    console.log("App is listening on port 3007");
});