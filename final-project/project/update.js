const express = require('express');
const con = require('./db');
const mysql = require('mysql2/promise');
const credentials = require('./db');
const customerQuery = require('./queryBuilders/customerUpdateQueryBuilders');
const itemQuery = require('./queryBuilders/itemUpdateQueryBuilder');
const sellerQuery = require('./queryBuilders/sellerUpdateQueryBuilders');
const orderQuery = require('./queryBuilders/orderUpdateQueryBuilder');
const checkIfExists = require('./checkIfExists');
const r = express.Router();

r.post('/', async function(req, res, next) {
    let tableName = req.body.tableName;
    let dataFromForm = req.body.formData;
    let affected = "";
    let whereQuery = "";
    let setQuery = "";
    let query = "";
    let values = "";
    if(checkIFEmpty(dataFromForm.old)) {
        console.log("works");
        res.send("No conditions were inserted");
    } else if(checkIFEmpty(dataFromForm.new)) {
        res.send("No new data was inserted");
    } else {
        switch(tableName) { 
            case 'Customer':
                whereQuery = customerQuery.customerQueryBuilderWhere(dataFromForm.old);
                setQuery = customerQuery.customerQueryBuilderSet(dataFromForm.new);
                query = setQuery[0] + whereQuery[0];
                values = setQuery[1].concat(whereQuery[1]);
                console.log(query, values);
                affected = await updateTable(query, values);
                res.send(` ${affected} row(s) was/were updated in the table Customer`);
                break;
            case 'Customer_order':
                const exists = await checkIfExists.checkIfEverythingExists(dataFromForm.new);
                if(exists[1] == false) {
                    res.send(exists[0]);
                } else {
                    whereQuery = orderQuery.orderQueryBuilderWhere(dataFromForm.old);
                    setQuery = orderQuery.orderQueryBuilderSet(dataFromForm.new);
                    query = setQuery[0] + whereQuery[0];
                    values = setQuery[1].concat(whereQuery[1]);
                    console.log(query, values);
                    affected = await updateTable(query, values);
                    res.send(`${affected} row(s) was/were deleted form table Order`);
                }
                break;
            case 'Item':
                whereQuery = itemQuery.itemQueryBuilderWhere(dataFromForm.old);
                setQuery = itemQuery.itemQueryBuilderSet(dataFromForm.new);
                query = setQuery[0] + whereQuery[0];
                values = setQuery[1].concat(whereQuery[1]);
                console.log(query, values);
                affected = await updateTable(query, values);
                res.send(`${affected} row(s) was/were update in the table Item`);
                break;
            case 'Seller':
                whereQuery = sellerQuery.sellerQueryBuilderWhere(dataFromForm.old);
                setQuery = sellerQuery.sellerQueryBuilderSet(dataFromForm.new);
                query = setQuery[0] + whereQuery[0];
                values = setQuery[1].concat(whereQuery[1]);
                console.log(query, values);
                affected = await updateTable(query, values);
                res.send(` ${affected} row(s) was/were updated in the table Seller`);
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


async function updateTable(query, data) {
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