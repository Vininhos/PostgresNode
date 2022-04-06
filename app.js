const express = require("express");
const database = require("./database");

const app = express();

app.use(express.json());

app.get("/select", (req, res) => {

    database.executeQuery().then(result => {
        res.send(result);
    });
});

app.listen(4001, () => console.log("Rodando servidor na porta 4001..."));