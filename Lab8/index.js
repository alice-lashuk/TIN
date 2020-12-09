const express = require('express')
const app = express();
const Person = require('./models/person.js')
let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
  })); 

app.set('view engine', 'ejs');
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.get('/form', (req, res) => {
    res.render('form.ejs');
});

app.get('/formdata', (req,res) =>{
    res.redirect('/form');
});

app.post('/formdata', (req, res) => {
    let emptyField = "not provided";
    let name = req.body.name;
    let surname = req.body.surname;
    let phone = req.body.phone;
    if(req.body.name.length == 0) {
        name = emptyField;
    } 
    if(req.body.surname.length == 0) {
        surname = emptyField;
    } 
    if(req.body.phone.length == 0) {
        phone = emptyField;
    } 
    let person = new Person(name, surname, phone);
    console.log(req.body.name);
    res.render('formdata.ejs', {newPerson:person});
});

app.post('/jsondata', (req, res) => {
    let person = new Person(req.body.name, req.body.surname, req.body.phone);
    res.render('formdata.ejs', {newPerson:person})
});

app.listen(port, () => {
console.log(`App listening on port ${port}!`)
});

// command for testing :
// curl -d "@Lab8/test/test.json" -H "Content-Type: application/json" -X POST http://localhost:3000/jsondata

  


