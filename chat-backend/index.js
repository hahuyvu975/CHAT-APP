const express = require('express');

const config = require('./config/app');

const router = require('./router');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);


const port = config.appPort;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
console.log("Hello world!");
//Run app, then load http://localhost:port in a browser to see the output.