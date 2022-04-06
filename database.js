const res = require("express/lib/response");
const { json } = require("express/lib/response");
const pg = require("pg");

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Conectado ao PostgreSQL...");
    }
});

async function executeQuery() {
    const query = await client.query("SELECT *FROM CLIENTE;");

    let rows = query.rows;
    let arrayRows = [];

    rows.map(row => {
        arrayRows.push(row);
    });

    return arrayRows;
};
module.exports = { executeQuery };
