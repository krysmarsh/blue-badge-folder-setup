let express = require("express");

let app = express();

app.use("/test", function(req,res) {
    let response = {"message": "This is test" };
    res.json(response);
});
    app.listen(3001, function() {
    console.log("App is listening on port 3001");
});

