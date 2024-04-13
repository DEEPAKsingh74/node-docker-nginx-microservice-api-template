const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


connection.on('connect', () => {
	console.log('Connected to MySQL server');
});

connection.on('end', () => {
	console.log('Connected to MySQL server');
});


module.exports = connection;