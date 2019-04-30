/* ######################## variables ##################### */
var form = document.querySelector('#myForm');



/* ######################### events listeners #################### */

/* #### blur #### */
// verifie que les champs ne sont pas vides
// récup des éléments contenus dans le formulaire (même le bouton)
var elements = form.elements;

for (let item of elements) {

  item.addEventListener('blur', function(){
    // on retire la classe error au cas où
    this.classList.remove('error');
    // on chope le spanError contenu dans le label correspondant à l'input en question
    // span.msg-error : on chope le sapn ayant la classe qui nous intéresse
    spanErrMsg = document.querySelector('label[for="' + this.getAttribute('id') + '"] span.msg-error'); // span : on chope le premier span à l'intérieur du label
      spanErrMsg.classList.remove('msg-error--show');
      if (!this.validity.valid) {
      // ajoute la classe error
      this.classList.add('error');
        spanErrMsg.classList.add('msg-error--show');
      // annule l'envoi du formulaire
      event.preventDefault();
    }
  });
}


/* #### submit #### */
form.addEventListener('submit', function(){
  var elements = form.elements;
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
      // prevent sending the form when click on submit button
      event.preventDefault();
    }
  }
});

