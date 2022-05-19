const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Database = require('better-sqlite3');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Configurar la base de datos
const db = new Database('./src/db/cards.db',
  {verbose: console.log }
);


// Crear constante para guardar la tarjeta creada
const savedCards = [];

//Enpoint post: Para generar la url de la tarjeta

server.post("/card", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.email !== "" &&
    req.body.phone !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "" &&
    req.body.photo !== ""
  ) {
    // Crear la tarjeta que es un objeto
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };

    // Añadir al listado de tarjetas
    // savedCards.push(newCard);

    // Insertar la tarjeta en la base de datos
    const query = db.prepare('INSERT INTO card (palette, name, job, email, phone, linkedin, github, photo, uuid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');

    // Ejecutar la consulta
    const result = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.email,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.photo,
      newCard.id
    );

    // Crear la respuesta
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };


    // Envío la respuesta
    res.json(responseSuccess);

  } else {

    const responseError = {
      success: false,
      error: "No hemos podido hacer tu tarjeta",
    };
    res.json(responseError);

  }
});

//Enpoint tarjeta de la usuaria

server.get(`/card/:id`, (req, res) => {
  console.log(req.params.id);
  // const userCard = savedCards.find((card) => card.id === req.params.id);

  // Preparar la sentencia para recoger los datos de la base de datos
  const query = db.prepare('SELECT * FROM card WHERE uuid = ?');
  const userCard = query.get(req.params.id);

  res.render("card", userCard);
});

// Servidores de estáticos de React
const pathServerPublic = "./src/public-react";
server.use(express.static(pathServerPublic));

// Servidores de estáticos de los estilos
const pathServerPublicStyles = "./src/public-css";
server.use(express.static(pathServerPublicStyles));
