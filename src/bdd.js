const sqlite3 = require('sqlite3').verbose();
let sql;
console.log("SERVICE ON");
//connect to DB
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);
})