const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 4000;

//TODO

app.get("/musicians", async (request, response) => {
    const getMusician = await Musician.findAll();
    response.json(getMusician);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port http://localhost:${port}/musicians`);
})