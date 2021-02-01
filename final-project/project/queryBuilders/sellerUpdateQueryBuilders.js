const express = require('express');
function sellerQueryBuilderWhere(data){
    let values = [];
    let count = 0;
    let query = "";
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
function sellerQueryBuilderSet(data){
    let values = [];
    let count = 0;
    let query = " Update Seller ";
    if(data.newName != "") {
        count++;
        query += " Set SName = ? "
        values.push(data.newName);
    }
    if(data.newSurname != "") {
        console.log("surname not empty")
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " SSurname = ? ";
        count++;
        values.push(data.newSurname);
    }
    if(data.newDate != "") {
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " SDateOfBirth = ?"
        count++;
        values.push(data.newDate);
    }
    if(data.newPosition != "") {
        if(count === 0) {
            query += " Set ";
        } else {
            query += " , ";
        }
        query  += " SPosition = ?"
        count++;
        values.push(data.newPosition);
    }
    return [query, values];  
}

module.exports = {sellerQueryBuilderWhere, sellerQueryBuilderSet}