const mariadb = require('mariadb');

const db = mariadb.createPool({
    host:"localhost",
    port:3306,
    user:"gz",
    password:"1001010101",
    database:"PblDB"
})

module.exports = db
