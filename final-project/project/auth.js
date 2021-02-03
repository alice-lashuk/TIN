const express = require('express');
const mysql = require('mysql2/promise');
const credentials = require('./db');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const secret = require('./secret').secret;
const r = express.Router();

r.post('/login', async function(req, res) {
    const secret_ = secret.secret;
    console.log(secret);
    console.log(req.body.formData);
    const result = await getUser(req.body.formData.email);
    console.log(result);
    bcrypt.compare(req.body.formData.password, result[0].UPassword).then(matches => {
        if(matches) {
            const token = jwt.sign({
                email: req.body.formData.email,
                id :result[0].IdUser
            }, 
            secret_, 
            {
                expiresIn: 60*60*30
            });
            const isAdmin = result[0].IsAdmin;
            const response = {"msg" : "success", "jwt_token": token, "isAdmin": isAdmin};
            res.send(response);
        } else {
            const failed = {"msg":"oops"};
            res.send(failed);
        }    
    });
    
});



r.post('/register', async function(req, res, next) {
    let data = req.body.formData;
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10)
        console.log(hashedPassword);
        exists = await checkIfEmailExists(data.email);
        if(!exists) {
            await addNewUser(data, hashedPassword);
            res.send("success");
        } else {
            res.send("Email already exists");
        }
    } catch(err) {
        console.log(err);
    }
})


async function getUser(email) {
    const connection = await mysql.createConnection(credentials);
    let query = "SELECT * FROM User Where UEmail = ?";
    try {
        const [rows, fields] = await connection.query(query, [
            email
        ])
        return rows;
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
} 


async function checkIfEmailExists(email) {
    const connection = await mysql.createConnection(credentials);
    let sql = "SELECT * FROM USER WHERE UEmail = ?"
    try {
        const [rows] = await connection.execute(sql,[
            email
        ]);

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

async function addNewUser(data, password) {
    const connection = await mysql.createConnection(credentials);
    let sql = "INSERT INTO User (UName, USurname, UPassword, UEmail, IsAdmin) VALUES (?, ?, ?, ?, ?)"
    let isAdmin = 0;
    if(data.admin !=="") {
        isAdmin = data.admin
    }
    try {
        const [rows] = await connection.execute(sql,[
            data.name,
            data.surname,
            password,
            data.email,
            isAdmin
        ]);
            console.log("1 record inserted");
    } catch(err) {
        console.log(err);
    } finally {
        connection.close();
    }
}

module.exports = r;