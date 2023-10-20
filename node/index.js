const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 3030;

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
});

const sql = `INSERT INTO names(name) values('Wilson')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
    res.send("<h1>hi, I'm live updating!</h1>");
});

app.listen(port, () => console.log(`Server running on ${port}`));
