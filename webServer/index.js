const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
const cors = require("cors");

// Variáveis para armazenar o estado dos botões
let liga = 0;
let desliga = 0;
let restart = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.setHeader("Content-Type", "application/json");

  // Atualiza as variáveis com base nos valores recebidos no corpo da solicitação
  liga = req.body.liga;
  desliga = req.body.desliga;
  restart = req.body.restart;

  console.log("liga:", liga);
  console.log("desliga:", desliga);
  console.log("restart:", restart);

  res.end();
});

app.get("/", function (req, res) {
  res.setHeader("Content-Type", "application/json");

  // Retorna o estado atual de todas as variáveis
  res.json({
    liga: liga,
    desliga: desliga,
    restart: restart
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
