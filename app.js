/*
 * MIT License
 * Copyright (c) [2023] [P.Bayle]
 * ...
 */

// Config
const config = require('./config/config.js');

// Librairies
const express = require('express');
const path = require('path');

// Definitions constantes
const app = express();
const port = config.port;

// Importez le contrôleur de page
const pageController = require('./src/controllers/pageController');


// Configurez le moteur de template (EJS dans cet exemple)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));


// Utilisez le contrôleur de page
app.use('/', pageController);

// Démarrez le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
