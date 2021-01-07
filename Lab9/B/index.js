const express = require('express')
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
const port = 3000;
app.use(express.static(__dirname + '/public')); 

app.get('/form', (req, res) => {
    res.sendFile( __dirname + '/public/form.html');
});

app.post('/calculate', (req, res) => {
    let operation = req.body.operation;
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    const obj = {
        "res": "Operation not found"
    }
    if(num1 == null || num2 == null) {
        obj.res = "please provide two numbers"
    } else {
        if(operation == "MUL") {
            obj.res = num1 * num2;
        } else if(operation == "SUB") {
            obj.res = num1 - num2;
        } else if(operation == "DIV") {
            if(num2 == 0) {
                obj.res = "can't divide by 0"
                console.log("test")
            } else {
                obj.res = num1 / num2;
            }   
        } else if(operation == "ADD") {
            obj.res = num1 + num2;
        }
    }
    res.send(obj);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});