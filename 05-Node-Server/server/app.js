require("dotven").config();
let express =  require('express');
let app = express();
// ***** ADD LINE BELOW
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
//***** Add 2 lines below *****
sequelize.sync();
//sequelize.sync({force: true})

// **** ADD LIUNE BELOW

app.use(express.json());

app.use('/journal', journal);
app.use('/user', user);

app.listen(3005, function() {
    console.log("App is listening on port 3005");
})