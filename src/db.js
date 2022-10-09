const { Pool } = require('pg');
const { db } = require('./config');

// Postgres conection
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
});

pool.connect();

pool.query("SELECT * FROM task", (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
});

module.exports = pool; 