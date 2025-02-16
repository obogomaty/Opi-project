// db.js
const { Pool } = require('pg');

// Create a new connection pool using environment variables
const pool = new Pool({
  host: process.env.DB_HOST,        // e.g., "yugabyte-db-ysql.yugabyte.svc.cluster.local"
  port: process.env.DB_PORT,        // e.g., "5433"
  user: process.env.DB_USER,        // e.g., "your_db_user"
  password: process.env.DB_PASSWORD, // e.g., "your_db_password"
  database: process.env.DB_NAME     // e.g., "your_database"
});

// Optional: Test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to YugabyteDB, current time:', result.rows[0].now);
  });
});

module.exports = pool;


