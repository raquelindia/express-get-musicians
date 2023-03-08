const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 4002;
sequelize.sync();
app.use(express.json())

//TODO

app.get("/musicians", async (request, response) => {
    const getMusician = await Musician.findAll();
    response.json(getMusician);
})

app.get("/musicians/:id", async (request, response) => {
    const musicianId = await Musician.findByPk(request.params.id);
    response.json(musicianId);
})

app.post("/musicians", async (req, res) => {
    const newName = req.body.name;
    const newInstrument = req.body.instrument;
    const newMusician = await Musician.create({name: newName, instrument: newInstrument});
    res.json(newMusician);
})

app.put("/musicians/:id", async (req, res) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedInstrument = req.body.instrument;
    const foundMusician = await Musician.findByPk(id);

    const updatedMusician = await foundMusician.update({
        name: updatedName, instrument: updatedInstrument
    });

    res.json(updatedMusician);
})

app.delete("/musicians/:id", async (req, res) => {
    const id = req.params.id;
    const musiciansRow = await Musician.findByPk(id);
    const deletedMusicians = await musiciansRow.destroy();
    res.json(deletedMusicians);
});

app.listen(port, () => {
    
    console.log(`Listening on port http://localhost:${port}/musicians`);
})