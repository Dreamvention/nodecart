var global = require('../../config');
var knex = require('knex')(global.db);

 module.exports = knex;
