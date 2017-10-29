'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = 'localhost';

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log('Running on http://'+HOST+':'+PORT);
