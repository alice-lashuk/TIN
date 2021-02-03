const express = require('express');
const r = express.Router();
const con = require('./db');
const mysql = require('mysql2/promise');
const { get } = require('./main');
const credentials = require('./db');
// TODO: format data  

const orderCustomerString = 'SELECT Customer_order.Amount, Item.IName, Seller.SName FROM Customer_order ' + 
                            'JOIN Item on Item.IdItem = Customer_order.Item ' +
                            'JOIN Seller on Seller.IdSeller = Customer_order.Seller Where Customer = ';
const orderItemString = 'SELECT Customer_order.Amount, Customer.CName, Seller.SName FROM Customer_order ' + 
                            'JOIN Customer on Customer.IdCustomer = Customer_order.Customer ' +
                            'JOIN Seller on Seller.IdSeller = Customer_order.Seller Where Item = ';
const orderSellerString = 'SELECT Customer_order.Amount, Item.IName, Customer.CName FROM Customer_order ' + 
                            'JOIN Item on Item.IdItem = Customer_order.Item ' +
                            'JOIN Customer on Customer.IdCustomer = Customer_order.Customer Where Seller = ';

r.post('/', async function(req, res, next) {
    let tablename = req.body.tableName;
    if(req.body.details === true) {
        switch(tablename) {
            case 'Customer':
                await getCustomersOrdersJSON(await getMainTable("Customer"), res);
                break;
            case 'Item':
                await getItemOrdersJSON(await getMainTable("Item"), res);
                break;
            case 'Seller':
                await getSellerOrdersJSON(await getMainTable("Seller"), res);
            default :
                selectOrder(res);
                break;
        }
    } else {
        switch(tablename) {
            case 'Customer_order':
                selectOrder(res);
                break;
            default :
                await select(tablename, res);
        }
    }
})

async function select(tablename, res) {
    const connection =   await mysql.createConnection(credentials);
    let query = `SELECT * FROM ${tablename}`;
    try {
        const [rows, fields] = await connection.query(query);
        res.send(rows);
    } catch {

    } finally {
        connection.close();
    }
} 

async function selectOrder(res) {
    const connection =  await mysql.createConnection(credentials);
        let query = 'SELECT Customer_order.IdOrder, Customer_order.Amount, Customer.CName, Item.IName, Seller.SName ' +
                    'FROM Customer_order '  +
                    'JOIN Customer on Customer.IdCustomer = Customer_order.Customer ' +
                    'JOIN Item on Item.IdItem = Customer_order.Item ' +
                    'JOIN Seller on Seller.IdSeller = Customer_order.Seller';
        try {
            const [rows, fields] = await connection.query(query);
            res.send(rows);
        } catch {
    
        } finally {
            connection.close();
        }
}

async function getCustomersOrdersJSON(listOfCustomers, res) {
    let cusotmerJson = [];
    for (const element of listOfCustomers) {
        const orders = await getOrder(element.IdCustomer, orderCustomerString);
        let date = element.DateOfBirth;
        if(element.DateOfBirth!= null){
            let d = element.DateOfBirth.toISOString().split('T')[0];
            date = d;
        }
        
        cusotmerJson.push(
            {
                name: element.CName,
                surname: element.CSurname,
                id: element.IdCustomer,
                dateOfBirth: date,
                cOrders: orders
            }
        );
    };   
    res.send(JSON.stringify(cusotmerJson));
}

async function getItemOrdersJSON(listOfItems, res) {
    let itemJson = [];
    for (const element of listOfItems) {
        const orders = await getOrder(element.IdItem, orderItemString);
        itemJson.push(
            {
                name: element.IName,
                id: element.IdItem,
                description: element.IDescription,
                orders: orders
            }
        );
    };
    res.send(JSON.stringify(itemJson));
}

async function getSellerOrdersJSON(listOfSellers, res) {
    let sellerJson = [];
    for (const element of listOfSellers) {
        const orders = await getOrder(element.IdSeller, orderSellerString);
        let date = element.SDateOfBirth;
        if(element.SDateOfBirth!= null){
            let d = element.SDateOfBirth.toISOString().split('T')[0];
            date = d;
        }
        sellerJson.push(
            {
                name: element.SName,
                surname: element.SSurname,
                id: element.IdSeller,
                dateOfBirth: date,
                position: element.SPosition,
                orders: orders
            }
        );
    };
    res.send(JSON.stringify(sellerJson));
}

async function getOrder(id, queryCustom) {
    const connection = await mysql.createConnection(credentials);
    let query = `${queryCustom}`+`${id}`;
    try {
        const [rows, fields] = await connection.query(query);
        return rows;
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

async function getMainTable(tableName) {
    const connection = await mysql.createConnection(credentials);
    let query = `SELECT * FROM ${tableName}`;
    try {
        const [rows, fields] = await connection.query(query);
        return rows;
    } catch {

    } finally {
        connection.close();
    }
} 

module.exports = r;