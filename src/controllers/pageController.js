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
  const vars = [];
  vars[0]= "active";
  vars[1]= "";
  vars[2]= "";
  vars[3]= "h-100";
  vars[4]= "";
  renderPage(req, res, 'index', vars);
});

router.get('/about-me', function(req, res) {
  const vars = [];
  vars[0]= "";
  vars[1]= "active";
  vars[2]= "";
  vars[3]= "";
  vars[4]= "";
  renderPage(req, res, 'about-me', vars);
});
/*
router.get('/about-me', (req, res) => {
  res.render('about-me'); 
});
*/
router.get('/projects', function(req, res) {
  const vars = [];
  vars[0]= "";
  vars[1]= "";
  vars[2]= "";
  vars[3]= "";
  vars[4]= "active";
  renderPage(req, res, 'projects', vars);
});
router.get('/contact', function(req, res) {
  const vars = [];
  vars[0]= "";
  vars[1]= "";
  vars[2]= "active";
  vars[3]= "h-100";
  vars[4]= "";
  renderPage(req, res, 'contact', vars);
});

router.get('/dist/aos.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../../node_modules/aos/dist/aos.css'));
});

router.get('/dist/aos.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../node_modules/aos/dist/aos.js'));
});

router.get('/dl-cv', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dl/bayle_cv.pdf'));
});

router.get('/storyquest-video.mp4', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/video/storyquest-video.mp4'));
});

router.get('/dl-storyquest', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dl/StoryQuest.zip'));
});

module.exports = router;
