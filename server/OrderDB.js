const MySql = require("sync-mysql");

const connection = new MySql({
    host: "localhost",
    user: "root",
    password: "",
    database: "orders"
});

module.exports = connection;