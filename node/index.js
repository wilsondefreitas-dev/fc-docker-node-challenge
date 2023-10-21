const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 3030;
let names = [];

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
});

const sqlInsertNames = `INSERT INTO names(name) values('Wilson de Freitas Junior')`;
connection.query(sqlInsertNames);

const sqlGetNames= `SELECT * FROM names`;
connection.query(sqlGetNames, (error, results) => {

    if (error) return console.error(error.message);
    names = results;

});

connection.end();

app.get("/", (req, res) => {
    res.send(`<div>
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${names.map(data => `<li>${data.name}</li>`).join("")}
        </ul>
    </div>`);
});

app.listen(port, () => console.log(`Server running on ${port}`));
