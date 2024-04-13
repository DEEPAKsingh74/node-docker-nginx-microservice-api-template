const express = require('express');
const connection = require('./database/mysql_config.js');
const app = express();
const port = 3000;


app.get('/merchant', (req, res) => {

  connection.query('SELECT * FROM onboard', (error, results, fields) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }
  
    // Log column names
    console.log('Column names:', fields.map(field => field.name));
  
    // Log query results
    console.log('Query results:', results);
  });

  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});