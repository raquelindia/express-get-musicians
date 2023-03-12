const express = require("express");
const router = express.Router();
const app = express();
const {Musician} = require("../index");
const {sequelize} = require("../db");
const {check, validationResult} = require("express-validator");
app.use(express.json());


router.get("/", async (request, response) => {
    const getMusician = await Musician.findAll();
    response.json(getMusician);
})

router.get("/:id", async (request, response) => {
    const musicianId = await Musician.findByPk(request.params.id);
    response.json(musicianId);
})

router.post("/", async (req, res) => {
    const newName = req.body.name;
    const newInstrument = req.body.instrument;
    const newMusician = await Musician.create({name: newName, instrument: newInstrument});
    res.json(newMusician);
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedInstrument = req.body.instrument;
    const foundMusician = await Musician.findByPk(id);

    const updatedMusician = await foundMusician.update({
        name: updatedName, instrument: updatedInstrument
    });

    res.json(updatedMusician);
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const musiciansRow = await Musician.findByPk(id);
    const deletedMusicians = await musiciansRow.destroy();
    res.json(deletedMusicians);
});


module.exports = router;