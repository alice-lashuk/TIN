const mysql = require('mysql2/promise');

const credentials =  {
    host: 'localhost',
    user: 'root',
    password: 'test',
    insecureAuth : true,
    database: 'tin_pr1'
}

module.exports = credentials;