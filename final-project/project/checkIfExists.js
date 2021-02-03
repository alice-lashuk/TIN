const mysql = require('mysql2/promise');
const credentials = require('./db');

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

async function checkIfEverythingExists(data) {
    customerExists = await checkIfCustomerExists(data.newCustomer);
    itemExists = await checkIfItemExists(data.newItem);
    sellerExists = await checkIfSellerExists(data.newSeller);
    if(!customerExists && data.newCustomer!="") {
        console.log("Customer failed");
        res = "There is no Customer with new provided ID, please insert another Customer ID";
        return [res, false];
    } else if(!itemExists && data.newItem!="") {
        res = "There is no Item with new provided ID, please insert another Item ID";
        return [res, false];
    } else if(!sellerExists && data.newSeller!="") {
        res = "There is no Seller with new provided ID, please insert another Seller ID";
        return [res, false];
    }
    return ["",true];

}

module.exports = {checkIfEverythingExists};