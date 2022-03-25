const mysql = require('mysql2/promise');

//db 설정

const pool = mysql.createPool({
    //gcp
    host: "34.82.201.150",
    // host: "158.247.234.137",
    user: "root",
    password: "0000",
    database: "ejs",
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 5
});




module.exports = pool