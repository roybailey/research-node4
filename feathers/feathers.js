// http://feathersjs.com/
'use strict';

var feathers = require('feathers');
var bodyParser = require('body-parser');

var app = feathers();
var todoService = require('./todos');

app.configure(feathers.rest())
    .use(bodyParser.json())
    .use('/todos', todoService)
    .listen(3000);
