const dotenv = require('dotenv').config();

module.exports = {
    db: {
        user: process.env.PGUSER || "jedolce",
        password: process.env.PGPASSWORD || "jedolce",
        host: process.env.PGHOST || "localhost",
        port: process.env.PGPORT || 5432,
        database: process.env.PGDATABASE || "tasksdb"
    }
}

 // Tuve que crear el ususarui jedolce,
 // ya que el usuario postgres no me funcionaba