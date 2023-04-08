const mysql = require('mysql2/promise');

alert ('start');

async function createTable() {
  // create a connection to the database
  const connection = await mysql.createConnection({
  host: 'c5mnq4bhkznq.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'database-connection-test'
  });

  // define the SQL query to create the table
  const sql = `
    CREATE TABLE my_table (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50),
      age INT,
      email VARCHAR(255)
    )
  `;

  // execute the query to create the table
  await connection.execute(sql);

  alert('Table created successfully.');

  // close the database connection
  await connection.end();
}

createTable().catch((error) => {
  console.error(error);
});
alert('finished');
