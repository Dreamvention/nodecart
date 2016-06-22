var global = require('../../../config');
var knex = require('knex')(global.db);
var bookshelf = require('bookshelf')(knex);

 module.exports = bookshelf;
