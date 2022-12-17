const mysql2 = require('mysql2/promise');

(async () => {
    const connection = await mysql2.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: '',
        database: 'stock_mfee31',
    });
    let result = await connection.query('SELECT * FROM `stocks`');
    let data = result[0];
    console.log(data);
    connection.end();
    // 要記得end connection (掛電話的概念)
})();



