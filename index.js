const express = require('express');
const Country = require('./db/models').Country;

const app = express();

app.listen(8002, () => console.log('Running on port: 8002'));