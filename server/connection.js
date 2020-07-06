let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'pravinsisowath',
    password: rootroot,
    database: 'notetaker'
})

module.exports = connection