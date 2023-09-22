/*
 * MIT License
 * Copyright (c) [2023] [P.Bayle]
 * ...
 */

// Librairies
// Charger le module Express
const express = require('express');
const router = express.Router();

// Importer le modèle de vue (EJS dans cet exemple)
const headerTemplate = 'header';
const footerTemplate = 'footer';


// Définissez une fonction pour rendre la page en utilisant les modèles de vue
function renderPage(req, res, contentTemplate) {
  res.render('template', {
    header: headerTemplate, // Remplacez 'header' par le nom de votre modèle de header si nécessaire
    footer: footerTemplate, // Remplacez 'footer' par le nom de votre modèle de footer si nécessaire
    content: contentTemplate,
    // D'autres données à passer aux modèles
  });
}

// Utilisez la fonction pour gérer différentes routes
router.get('/', (req, res) => {
  renderPage(req, res, 'index'); // Remplacez 'index' par le nom de votre modèle de contenu
});

router.get('/ma-page', (req, res) => {
  renderPage(req, res, 'content'); // Remplacez 'content' par le nom de votre modèle de contenu
});


module.exports = router;
