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
function executeQuery() {
    const query = "SELECT *FROM CLIENTE;"

    let arrayRows = [];

    client.query(query).then(res => {
        console.log("Selecionando dados do cliente...");
        const rows = res.rows;

         rows.map(row => {
             arrayRows.push(row);
        });
        console.log("Retornando dados...");

        //client.end;

        return arrayRows.length;
    }).catch(err => {
        console.log(err);
    });
};
module.exports = { executeQuery };
