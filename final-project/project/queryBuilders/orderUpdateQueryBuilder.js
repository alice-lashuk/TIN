const express = require('express');
// const data = {old: {id: this.state.Oid, customer: this.state.Customer, seller: this.state.Seller, item: this.state.Item, amount: this.state.Amount},
                    // new: {newCustomer: this.state.CustomerNew, newSeller: this.state.SellerNew, newItem: this.state.ItemNew, newAmount: this.state.AmountNew}};
function orderQueryBuilderSet(data) {
    let values = [];
    let count = 0;
    let query = " Update Customer_order ";
    if(data.newSeller != "") {
        count++;
        query += " Set Seller = ? "
        values.push(data.newSeller);
    }
    if(data.newCustomer != "") {
        console.log("surname not empty")
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " Customer = ? ";
        count++;
        values.push(data.newCustomer);
    }
    if(data.newItem != "") {
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " Item = ?"
        count++;
        values.push(data.newItem);
    }
    if(data.newAmount != "") {
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " Amount = ?"
        count++;
        values.push(data.newAmount);
    }
    return [query, values];  
};

function orderQueryBuilderWhere(data) {
    let values = [];
    let count = 0;
    let query = "";
    if(data.id != "") {
        count++;
        query += " WHERE IdOrder = ? "
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
        query  += " Seller = ?"
        count++;
        values.push(data.seller);
    }
    if(data.item != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Item = ?"
        count++;
        values.push(data.item);
    }
    if(data.amount != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += " Amount = ?"
        count++;
        values.push(data.amount);
    }
    return [query, values];  
} 

module.exports = {orderQueryBuilderSet, orderQueryBuilderWhere};
