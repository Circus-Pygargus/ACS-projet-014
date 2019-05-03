/* ######################## variables ##################### */
// le formulaire
var form = document.querySelector('#myForm');
// les emplacements prévu pour afficher les messages d'erreurs
var errNom = document.querySelector('label[for="nom"] span.msg-error');
var errMail = document.querySelector('label[for="mail"] span.msg-error');
var errMessage = document.querySelector('label[for="message"] span.msg-error');
var backMessage = document.querySelector('#backMessage');



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
      // appelle la fonction qui réagira selon la réponse renvoyée par le php
      reactAccordingToAnswer(this.response); 
    }
    xhr.send(data);
  }
});


/* ####################### functions ######################## */

/* traite la réponse du php et réagit en fonction.
    arg : la réponse renvoyée par php (type string) */
function reactAccordingToAnswer (_answer) {
  var counter = 0;
  errNom.classList.remove('msg-error--show');
  errMail.classList.remove('msg-error--show');
  errMessage.classList.remove('msg-error--show');

  // switch (_answer) {
  //   case "[nom]": 
  //     errNom.classList.add('msg-error--show');
  //     errNom.innerHTML = "Ce nom ne semnble pas valide.";
  //     break;
  //   case "[mail]":
  //     errMail.classList.add('msg-error--show');
  //     errMail.innerHTML = "Cette adresse email ne semnble pas valide.";
  //     break;
  //   case "[message]":
  //     errMessage.classList.add('msg-error--show');
  //     errMessage.innerHTML = "Ce message ne semnble pas valide.";
  //     break;
  //   case "ok":
  //     backMessage.innerHTML = "Votre message a bien été envoyé";
  //     break;
  // }

  if (/(\[nom\])/.test(_answer)) {
    counter++;
    errNom.classList.add('msg-error--show');
    errNom.innerHTML = "Ce nom ne semnble pas valide.";
  }
  if (/(\[mail\])/.test(_answer)) {
    counter++;
    errMail.classList.add('msg-error--show');
    errMail.innerHTML = "Cette adresse email ne semnble pas valide.";
  }
  if (/(\[message\])/.test(_answer)){
    counter++;
    errMessage.classList.add('msg-error--show');
    errMessage.innerHTML = "Ce message ne semnble pas valide.";
  }
  if (/(\[ok\])/.test(_answer)) {
    counter++;
    // backMessage.style.display = "inline-block";
    // backMessage.style.color = "green";
    backMessage.classList.remove('hide');
    backMessage.classList.remove('red');
    backMessage.classList.add('green');
    backMessage.classList.add('show');
    backMessage.innerHTML = "Votre message a bien été envoyé";
  }
  if (counter === 0) {    
    // backMessage.style.display = "inline-block";
    // backMessage.style.color = "red";
    backMessage.classList.remove('hide');
    backMessage.classList.remove('green');
    backMessage.classList.add('red');
    backMessage.classList.add('show');
    backMessage.innerHTML = _answer;
  }
}



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