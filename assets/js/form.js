/* ######################## variables ##################### */
var form = document.querySelector('#myForm');



/* ######################### events listeners #################### */

/* #### blur #### */
// verifie que les champs ne sont pas vides
// récup des éléments contenus dans le formulaire (même le bouton)
var elements = form.elements;

for (let item of elements) {

  item.addEventListener('blur', function () {
    // on retire la classe error au cas où
    this.classList.remove('error');
    // on chope le spanError contenu dans le label correspondant à l'input en question
    // span.msg-error : on chope le sapn ayant la classe qui nous intéresse
    spanErrMsg = document.querySelector('label[for="' + this.getAttribute('id') + '"] span.msg-error'); // span : on chope le premier span à l'intérieur du label
    // ce if évite un message d'erreur avec le bouton du formulaire
    if (spanErrMsg != null) {
      // retire la classe d'erreur
      spanErrMsg.classList.remove('msg-error--show');
      if (!this.validity.valid) {
        // ajoute la classe error
        this.classList.add('error');
        // colle la classe d'erreur
        spanErrMsg.classList.add('msg-error--show');
        // annule l'envoi du formulaire
        event.preventDefault();
      }
    }
  });
}


/* #### submit #### */
form.addEventListener('submit', function () {
  // prevent sending the form when click on submit button
  event.preventDefault();
  var elements = form.elements;
  var errorCounter = 0;
  for (let item of elements) {
    // le champs n'est pas valide
    /* ici on comprend que le novalidate sur le form en html n'empèche pas le testr de validation 
        mais que le message d'erreur du navigateur */
    if (!item.validity.valid) {
      // on ajoute la classe .error
      item.classList.add('error');
      // on chope le spanError contenu dans le label correspondant à l'input dont on parle
      spanErrMsg = document.querySelector('label[for="' + item.getAttribute('id') + '"] span.msg-error'); // span : on chope le premier span à l'intérieur du label
      spanErrMsg.classList.add('msg-error--show');
    }
  }
  if (errorCounter == 0) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/testAndSendForm.php');
    var data = new FormData();
    data.append('nom', document.querySelector('#nom').value);
    //data.append('adresse', document.querySelector('#adresse').value); // pas d'adresse dans l'exercice ...
    data.append('mail', document.querySelector('#mail').value);
    data.append('message', document.querySelector('#message').value);
    xhr.onload = function () {
      // affiche le echo renvoyé par testAndSendForm.php
      console.log(this.responseText);
    }
    xhr.send(data);
  }
});

/* ################## tests ################## */
// postForm('http://localhost:8080/')
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// function postForm(url) {
//   const formData = new FormData(document.querySelector('form#myForm'))

//   return fetch(url, {
//     method: 'POST', 
//     body: formData
//   })
//   .then(response => response.json())
// }
// var formData = new FormData(document.querySelector('#myForm'));
// console.log(formData);


// xhr est une techno inclue dans le navigateur
// document.querySelector('#myForm').addEventListener('submit', function(){
//   event.preventDefault();

//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'assets/php/testAndSendForm.php');
//   var data = new FormData();
//   data.append('nom',document.querySelector('#nom').value);
//   data.append('adresse', document.querySelector('#adresse').value);
//   data.append('mail', document.querySelector('#mail').value);
//   data.append('message', document.querySelector('#message').value);
//   xhr.onload = function(){
//     console.log(this.responseText);
//   }
//   xhr.send(data);
// });