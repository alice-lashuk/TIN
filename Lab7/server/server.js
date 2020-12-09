const http = require('http');
const url  = require('url');
const reg = /\d+/;
const requestListener = function (req, res) {
    const nums = url.parse(req.url, true);
 
    if(nums.query['val1'] == null || nums.query['val2'] == null) {
        res.write("please provide values");
    } else if(!checkNums(nums.query['val1'], nums.query['val2'])) {
        res.write("please provide correct values");
    } else {
        let num1 = Number(nums.query['val1']);
        let num2 = Number(nums.query['val2']);

        if(nums.pathname == '/mul') {
            res.write(`Operation: multiplication\n`);
            res.write(`Result: ${mul(num1, num2)}\n`);
        } else if(nums.pathname == '/div') {
            res.write(`Operation: division\n`);
            res.write(`Result: ${div(num1, num2)}\n`); 
        } else if(nums.pathname == '/sub') {
            res.write(`Operation: subtraction\n`);
            res.write(`Result: ${sub(num1, num2)}\n`);
        } else if(nums.pathname == '/add') {
            res.write(`Operation: addition\n`);
            res.write(`Result: ${add(num1, num2)}\n`);
        } else {
            res.write("Oops, wrong url");
        }
    }
    res.end();
}

function add(num1,num2) {
    return num1+num2;
}

function div(num1,num2) {
    if(num2 == 0) {
        return "undefined";
    }
    return num1/num2;
}
function sub(num1,num2) {
    return num1-num2;
}
function mul(num1,num2) {
    return num1*num2;
}

function checkNums(num1, num2) {
    return num1.match(reg) && num2.match(reg);
}
 
const server = http.createServer(requestListener);
server.listen(8080);