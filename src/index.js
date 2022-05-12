const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Enpoint post: Para generar la url de la tarjeta

server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: "https://awesome-profile-cards.herokuapp.com/card",
  };
  const responseError = {
    success: false,
    error: "No hemos podido hacer tu tarjeta",
  };
  res.json(responseSuccess);
});

//Enpoint tarjeta de la usuaria

server.get("/card/id", (req, res) => {
  res.json("tarjeta creada");
});
