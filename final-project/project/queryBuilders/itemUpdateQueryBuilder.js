const express = require('express');
function itemQueryBuilderSet(data) {
    let values = [];
    let count = 0;
    let query = " Update Item ";
    if(data.newName != "") {
        count++;
        query += " Set IName = ? "
        values.push(data.newName);
    }
    if(data.newDiscription != "") {
        console.log("surname not empty")
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " IDescription = ? ";
        count++;
        values.push(data.newDiscription);
    }
    return [query, values];  
};

function itemQueryBuilderWhere(data) {
    let values = [];
    let count = 0;
    let query = "";
    if(data.id != "") {
        count++;
        query += " WHERE IdItem = ? "
        values.push(data.id);
    }
    if(data.name != "") {
        if(count === 0) {
            query += " WHERE ";
        } else {
            query += " AND ";
        }
        query  += "IName = ? ";
        count++;
        values.push(data.name);
    }
    return [query, values];  
} 

module.exports = {itemQueryBuilderSet, itemQueryBuilderWhere};