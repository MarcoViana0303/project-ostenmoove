const express = require('express');
const app = express();

const routes = require('./routes/tool.routes');

app.use('/', routes);

module.exports = app;