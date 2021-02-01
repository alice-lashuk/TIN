const express = require('express');
const con = require('./db');
const mysql = require('mysql2/promise');
const credentials = require('./db');
const r = express.Router();

r.post('/', async function(req, res, next) {
    let tableName = req.body.tableName;
    let dataFromForm = req.body.formData;
    let response = ""
    switch(tableName) { 
        case 'Customer':
            response = await insertIntoCustomer(req.body.formData);
            break;
        case 'Customer_order':
            response = await insertIntoOrder(req.body.formData);
            break;
        case 'Item':
            response = await insertIntoItem(dataFromForm);
            break;
        case 'Seller':
            response = await insertIntoSeller(dataFromForm);
            break;
    }
    res.send(response);
})

async function insertIntoCustomer(data) {
    const connection = await mysql.createConnection(credentials);
    let newDate = null;
    if(data.date != '') {
        newDate = data.date;
    } 
    let sql = "INSERT INTO Customer (CName, CSurname, DateOfBirth) VALUES (?, ?, ?)"
    try {
        const [rows] = await connection.execute(sql,[
            data.name,
            data.surname,
            newDate
        ]);
            console.log("1 record inserted");
            return "1 record inserted into table Customer"
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

async function insertIntoItem(data) {
    const connection = await mysql.createConnection(credentials);
    let sql = "INSERT INTO Item (IName, IDescription) VALUES (?, ?)"
    try {
        const [rows] = await connection.execute(sql,[
            data.name,
            data.description,
        ]);    
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
    return "1 record inserted into table Item"
}

async function insertIntoSeller(data) {
    const connection = await mysql.createConnection(credentials);
    let newDate = null;
    if(data.date != '') {
        newDate = data.date;
    } 
    console.log(data);
    let sql = "INSERT INTO Seller (SName, SSurname, SDateOfBirth, SPosition) VALUES (?, ?, ?, ?)"
    try {
        const [rows] = await connection.execute(sql,[
            data.name,
            data.surname,
            newDate,
            data.position
        ]);
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    } 
    return "1 record inserted into table Seller";
}


async function insertIntoOrder (data) {
    console.log(data);
    let res = "";
    const connection = await mysql.createConnection(credentials);
    //{customer: this.state.Customer, seller: this.state.Seller, item: this.state.Item, amount: this.state.Amount}
    customerExists = await checkIfCustomerExists(data.customer);
    itemExists = await checkIfItemExists(data.item);
    sellerExists = await checkIfSellerExists(data.seller);
    if(!customerExists) {
        console.log("Customer failed");
        res = "There is no Customer with provided ID, please insert another Customer ID";
        return res;
    } else if(!itemExists) {
        res = "There is no Item with provided ID, please insert another Item ID";
        return res;
    } else if(!sellerExists) {
        res = "There is no Seller with provided ID, please insert another Seller ID";
        return res;
    }
    let amount = 1;
    if(data.amount != '') {
        amount = data.amount;
    }

    let sql = "INSERT INTO Customer_order (Seller, Customer, Item, Amount) VALUES (?, ?, ?, ?)"
    try {
        const[rows] = await connection.execute(sql, [
            data.seller,
            data.customer,
            data.item,
            amount
        ]);
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
    res = "1 record was inserted into table Order";
    return res;
}


async function checkIfCustomerExists(id) {
    const connection = await mysql.createConnection(credentials);
    let query = "SELECT * FROM Customer Where IdCustomer = ?";
    try {
        const [rows, fields] = await connection.query(query, [
            id
        ])
        if(rows.length === 0) { 
            return false; 
        } else {
            return true;
        }
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

async function checkIfItemExists(id) {
    const connection = await mysql.createConnection(credentials);
    let query = "SELECT * FROM Item Where IdItem = ?";
    try {
        const [rows, fields] = await connection.query(query, [
            id
        ])
        if(rows.length === 0) { 
            return false; 
        } else {
            return true;
        }
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

async function checkIfSellerExists(id) {
    const connection = await mysql.createConnection(credentials);
    let query = "SELECT * FROM Seller Where IdSeller = ?";
    try {
        const [rows, fields] = await connection.query(query, [
            id
        ])
        if(rows.length === 0) { 
            return false; 
        } else {
            return true;
        }
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

module.exports = r;