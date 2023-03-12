const Sequelize = require("sequelize");
const {sequelize} = require('./db');

let Musician = sequelize.define('musician', {
    name: Sequelize.STRING,
    instrument : Sequelize.STRING
});

module.exports = {
    Musician
};