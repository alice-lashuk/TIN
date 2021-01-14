import _ from 'lodash';
const express = require('express')
const app = express();
const port = 3000;
const temp = require('./temerature.js');
const dist = require('./distance.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ 
    extended: true
  })); 


app.engine('ejs', require('ejs').__express);

app.get('/main', (req, res) => {
    res.render(__dirname + '/index.ejs');
});

app.use('/temp', temp);
app.use('/dist', dist);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});