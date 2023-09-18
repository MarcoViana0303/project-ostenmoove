const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/tool.routes');

app.use(cors());
app.use('/', routes);

module.exports = app;
