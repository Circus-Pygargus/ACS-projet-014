/* ################### Variables ##################### */

// les liens du filtre
var projectsFilters = document.querySelectorAll('.projects_filter');

// toutes les images de réalisations
var allProjects = document.querySelectorAll('.toutes');
// les exercices
var exercicesProjects = document.querySelectorAll('.exercice');
// les sites
var sitesProjects = document.querySelectorAll('.site');
// les intégrations
var integrationsProjects = document.querySelectorAll('.integration');
// les projets en groupe
var groupProjects = document.querySelectorAll('.group');


/* ################### click event ###################### */
for (var i=0; i<projectsFilters.length; i++) {
  var filter = projectsFilters[i];
  filter.addEventListener('click', function(){
    // on enlève l'underline si présent
    for (var i=0; i<projectsFilters.length; i++) {
      projectsFilters[i].classList.remove('thin_underline');
    }
    /* on récup l'id du filtre, 
    il est identique à la classe des images à afficher */
    var filterId = this.getAttribute('id');
    // on cache toutes les images
    var imgsToDisplay = document.querySelectorAll('.' + filterId);
    for (var i=0; i<allProjects.length; i++) {
      allProjects[i].classList.remove('show');
      allProjects[i].classList.add('hide');
    }
    // on affiche que les images voulues
    for (var i=0; i<imgsToDisplay.length; i++) {
      imgsToDisplay[i].classList.add('show');
    }
    // on affiche l'underline sur le bon filtre
    this.classList.add('thin_underline');
  });
}