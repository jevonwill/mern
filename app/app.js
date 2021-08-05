const express = require('express');
const app = express();
const path = require('path');
const port = 5000;


app.use(express.static(__dirname + "/assets"));


app.listen(port, () => {

});


