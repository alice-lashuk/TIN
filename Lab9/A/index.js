const express = require('express')
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
const fs = require('fs');
const port = 3000;

app.use(bodyParser.urlencoded({ 
    extended: true
  })); 
  
app.post('/jsondata', (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let op = req.body.op;
    let answer = 0;
    if(op == "+") {
        answer = num1 + num2;
    } else if(op == "*") {
        answer = num1 * num2;
    } else if(op == "/") {
        answer = num1 / num2;
    } else if(op == "-") {
        answer = num1 - num2;
    } else {
        answer = "wrong operation"
    }
    
    let json_obj = JSON.stringify(
        {
            num1, 
            num2, 
            answer
        });

    res.send(json_obj);
    fs.writeFile('./json_files/answer.json', json_obj , function(err) {
        if (err) {
            return console.log(err);
        }
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
// command for testing :
// curl -d "@Lab9/A/json_files/req.json" -H "Content-Type: application/json" -X POST http://localhost:3000/jsondata
