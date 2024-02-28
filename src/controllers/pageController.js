/*
 * MIT License
 * Copyright (c) [2023] [P.Bayle]
 * ...
 */

// Librairies
// Charger le module Express
const express = require('express');
const router = express.Router();
const path = require('path');
const log = require('./loggerController');


// Importer le modèle de vue (EJS dans cet exemple)
const headerTemplate = 'header';
const footerTemplate = 'footer';


// Définissez une fonction pour rendre la page en utilisant les modèles de vue
function renderPage(req, res, contentTemplate, vars) {
  res.render('template', {
    header: headerTemplate, // Remplacez 'header' par le nom de votre modèle de header si nécessaire
    footer: footerTemplate, // Remplacez 'footer' par le nom de votre modèle de footer si nécessaire
    content: contentTemplate,
    vars: vars,
    // D'autres données à passer aux modèles
  });
}

// Rendre tous les fichiers dans le dossier "public" accessibles
router.use('/', express.static('src/public'));
router.use('/bootstrap/', express.static('node_modules/bootstrap'));


router.get('/', function(req, res) {
  log(req, 'Page requested: /');
  const vars = [];
  vars[0]= "index";
  vars[3]= "true";
  renderPage(req, res, 'index', vars);
});

router.get('/about-me', function(req, res) {
  log(req, 'Page requested: /about-me');
  const vars = [];
  vars[0]= "about-me";
  vars[3]= "";
  renderPage(req, res, 'about-me', vars);
});
/*
router.get('/about-me', (req, res) => {
  res.render('about-me'); 
});
*/
router.get('/projects', function(req, res) {
  log(req, 'Page requested: /projects');
  const vars = [];
  vars[0]= "projects";
  vars[3]= "";
  renderPage(req, res, 'projects', vars);
});
router.get('/contact', function(req, res) {
  log(req, 'Page requested: /contact');
  const vars = [];
  vars[0]= "contact";
  vars[3]= "true";
  renderPage(req, res, 'contact', vars);
});

router.get('/dist/aos.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../../node_modules/aos/dist/aos.css'));
});

router.get('/dist/aos.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../node_modules/aos/dist/aos.js'));
});

router.get('/dl-cv', (req, res) => {
  log(req, 'Download requested: /dl-cv');
  res.sendFile(path.join(__dirname, '../public/dl/bayle_cv.pdf'));
});

router.get('/storyquest-video.mp4', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/video/storyquest-video.mp4'));
});

router.get('/dl-storyquest', (req, res) => {
  log(req, 'Download requested: /dl-storyquest');
  res.sendFile(path.join(__dirname, '../public/dl/StoryQuest.zip'));
});

module.exports = router;
