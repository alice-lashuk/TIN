const express = require('express');
const con = require('./db');
const mysql = require('mysql2/promise');
const credentials = require('./db');
const r = express.Router();

r.post('/', async function(req, res, next) {
    let tableName = req.body.tableName;
    let dataFromForm = req.body.formData;
    console.log(dataFromForm);
    let response = ""
    let queryResult = "";
    let affected = "";
    if(checkIFEmpty(dataFromForm)) {
        console.log("works");
        res.send("No conditions were inserted");
    } else {
        switch(tableName) { 
            case 'Customer':
                queryResult = customerQueryBuilder(dataFromForm);
                console.log(queryResult);
                affected = await deleteFromTable(queryResult[0], queryResult[1]);
                res.send(` ${affected} row(s) was/were deleted form table Customer`);
                break;
            case 'Customer_order':
                queryResult = orderQueryBuilder(dataFromForm);
                affected = await deleteFromTable(queryResult[0], queryResult[1]);
                res.send(`${affected} row(s) was/were deleted form table Order`);
                break;
            case 'Item':
                queryResult = itemQueryBuilder(dataFromForm);
                affected = await deleteFromTable(queryResult[0], queryResult[1]);
                res.send(`${affected} row(s) was/were deleted form table Item`);
                break;
            case 'Seller':
                queryResult = sellerQueryBuilder(dataFromForm);
                affected = await deleteFromTable(queryResult[0], queryResult[1]);
                res.send(` ${affected} row(s) was/were deleted form table Seller`);
                break;
        }
    }
})

function checkIFEmpty(data) {
    isNull = true;
    Object.keys(data).forEach(function(key) {
        value = data[key];
        if(value != "") {
            isNull = false;
        } 
    });  
    return isNull;
}

function customerQueryBuilder(data) {
    let values = [];
    let count = 0;
    let query = "DELETE FROM Customer ";
    if(data.id != "") {
        count++;
        query += " WHERE idCustomer = ? "
        values.push(data.id);
    }
    if(data.name != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " CName = ? ";
        count++;
        values.push(data.name);
    }
    if(data.surname != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Csurname = ?"
        count++;
        values.push(data.surname);
    }
    if(data.date != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " DateOfBirth = ?"
        count++;
        values.push(data.date);
    }
    return [query, values];  
}

function sellerQueryBuilder(data) {
    let values = [];
    let count = 0;
    let query = "DELETE FROM Seller ";
    if(data.id != "") {
        count++;
        query += " WHERE idSeller = ? "
        values.push(data.id);
    }
    if(data.name != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " SName = ? ";
        count++;
        values.push(data.name);
    }
    if(data.surname != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " SSurname = ? "
        count++;
        values.push(data.surname);
    }
    if(data.date != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " SDateOfBirth = ? "
        count++;
        values.push(data.date);
    }
    if(data.position != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " SPosition = ? "
        count++;
        values.push(data.position);
    }
    return [query, values];  
}

function orderQueryBuilder(data) {
    
    let values = [];
    let count = 0;
    let query = "DELETE FROM Customer_order ";
    if(data.id != "") {
        count++;
        query += " WHERE idOrder = ? "
        values.push(data.id);
    }
    if(data.customer != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Customer = ? ";
        count++;
        values.push(data.customer);
    }
    if(data.seller != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Seller = ? "
        count++;
        values.push(data.seller);
    }
    if(data.item != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Item = ? "
        count++;
        values.push(data.item);
    }
    if(data.amount != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Amount = ? "
        count++;
        values.push(data.amount);
    }
    return [query, values]; 
}

function itemQueryBuilder(data) {
    let values = [];
    let count = 0;
    let query = "DELETE FROM Item ";
    if(data.id != "") {
        count++;
        query += " WHERE idItem = ? "
        values.push(data.id);
    }
    if(data.name != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " IName = ? ";
        count++;
        values.push(data.name);
    }
    return [query, values]; 
}

async function deleteFromTable(query, data) {
    let affected = 0;
    const connection = await mysql.createConnection(credentials);
    try {
        const [rows] = await connection.query(query, data);
        affected = rows.affectedRows;
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
    return affected;
}

module.exports = r;