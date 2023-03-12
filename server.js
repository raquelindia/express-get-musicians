const express = require("express");
const app = express();
const router = express.Router();
const {Musician} = require("./index")
const {sequelize} = require("./db")

const port = 4009;
app.use(express.json());
sequelize.sync();


//TODO
 
const musicianRouter = require("./routes/musicians25");
app.use("/musicians25", musicianRouter);


app.listen(port, () => {
   
    console.log(`Listening on port http://localhost:${port}/musicians25`);
})