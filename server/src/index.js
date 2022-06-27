const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const config       = require('config');
const cors         = require('cors');

const db = require('./models');
const routes = require('./routes');

const port = config.get('port');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: "https://mern-boilerplate-ubvas.run.goorm.io"}));

app.use('/', routes);

app.get('/', (req, res, next) => {
    res.send('hello world!');
});

db.once('open', function () {           
    console.log('DB Connected');
});

db.on('error', function (err) {
    console.log('DB ERROR : ', err);
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
