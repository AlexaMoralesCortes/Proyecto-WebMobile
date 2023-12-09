import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'webmobile'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    throw err;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

export default connection;