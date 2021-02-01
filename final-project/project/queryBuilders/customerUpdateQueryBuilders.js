const express = require('express');

function customerQueryBuilderSet(data) {
    let values = [];
    let count = 0;
    let query = " Update Customer ";
    if(data.newName != "") {
        count++;
        query += " Set CName = ? "
        values.push(data.newName);
    }
    if(data.newSurname != "") {
        console.log("surname not empty")
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " CSurname = ? ";
        count++;
        values.push(data.newSurname);
    }
    if(data.newDate != "") {
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " DateOfBirth = ?"
        count++;
        values.push(data.newDate);
    }
    return [query, values];  
};

function customerQueryBuilderWhere(data) {
    let values = [];
    let count = 0;
    let query = "";
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

module.exports = {customerQueryBuilderSet, customerQueryBuilderWhere};
