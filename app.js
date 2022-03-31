const express = require("express");
const database = require("./database");

const app = express();

app.use(express.json());

app.get("/select", (req, res) => {

   let result = database.executeQuery();
    console.log(result);

    resultJson = JSON.stringify(result);

    return res.json({
        message: resultJson
    });
});

app.listen(4001, () => console.log("Rodando servidor na porta 4001..."));