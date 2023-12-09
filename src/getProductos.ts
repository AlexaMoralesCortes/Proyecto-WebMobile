import connection from './database.ts';

export const getProducts = () => {
  return new Promise<any[]>((resolve, reject) => {
    connection.query('SELECT * FROM PRODUCTOS', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
