const express = require('express');

const config = require('./config/app');

const router = require('./router');

const bodyParser = require('body-parser');

const cors = require('cors');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

 app.use(express.static(__dirname + '/public'));
 app.use(express.static(__dirname + '/uploads'));
// app.use('/static',express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))
const port = config.appPort;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
console.log("Hello world!");
//Run app, then load http://localhost:port in a browser to see the output.