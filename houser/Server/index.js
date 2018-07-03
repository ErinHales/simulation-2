const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controllers = require("./controller");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(function(db) {
    console.log("db connected");
    app.set("db", db)
}).catch(error => {
    console.log(error);
})

app.use(express.static(`${__dirname}./../build`));

app.get("/allhouses", controllers.getAll);

app.post("/newhouse", controllers.addHouse);

app.delete("/delete/:id", controllers.deleteHouse);





const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})