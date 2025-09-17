const mongoose = require("mongoose"); //facilite la connection et manipulation de mongodb
const express = require("express"); //importation de express
const app = express(); // appellation du framework express
const { MongoClient } = require("mongodb");
const Contact = require("./models/User.js");
const User = require("./models/User.js");

app.use(express.json()); //Middlewear, pas autoris


mongoose
  .connect("mongodb+srv://test:test@cluster0.by6ekqy.mongodb.net/")
  .then(() => {
    console.log("Connecté à la BDD");
    
  })
  .catch(() => {
    console.log("Connection échouée");
  });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/toto', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });

app.post("/api/contacts", async (req, res) => {
  //envoyer des données
  try {
    const contact = await Contact.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(8080, () => {
    console.log("server listening on port 8080");
  });