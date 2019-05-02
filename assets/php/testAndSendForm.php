<?php

/* ################## variables #################### */
// le message de retour du POST
$backMessage ="";
// les champs du formulaire
$nom = htmlspecialchars($_POST['nom']);
//$adresse = htmlspecialchars($_POST['adresse']); // pas besoin de l'adresse dans l'exo
$mail = htmlspecialchars($_POST['mail']);
$message = htmlspecialchars($_POST['message']);
// les regEx
$regEx_nom = "/^(?! )((?!  )(?! $)[a-zA-Z ]){3,50}$/";
//$regEx_adresse = "/^([1-9]([0-9]{1,3})? ?(bis|ter)?,? ?)?(Place|Impasse|Chemin|Rue|Avenue|Boulevard){1}[-a-zA-Z0-9 ]{2,35}/i";
$regEx_mail = "/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/";
$regEx_message = "/.{3,}\s?/";
// un compteur pour être sûr que tout va bien
$errCounter = 0;

/* ################ tests des champs du formulaire ##################### */
// tests des champs avec les regEx
if (isset($nom)
      && !preg_match($regEx_nom, $nom)) {
  $errCounter++;
}
if (isset($nom)
      && !preg_match($regEx_mail, $mail)) {
  $errCounter++;
}
if (isset($nom)
      && !preg_match($regEx_message, $message)) {
  $errCounter++;
}

echo "nbr erreurs : " . $errCounter . "<br>";


// Erreurs présentes dans le formulaire, on envoie un message donnant la ou les erreurs
if ($errCounter !== 0) {

}
// tout va bien, on envoie le contenu du formulaire par mail et on affiche la confirmation sur la page web
else {
  sendMail();
}


/* ######################### fonctions ############################# */

// envoi du mail
function sendMail() {
  global $nom;
  global $mail;
  global $message;

  $sujet = "réception de contenu de formulaire";
  $mailMessage = "Bonjour moi, quelqu'un m'a envoyé un formulaire ! <br>
                son nom : " . $nom . "<br>
                son mail : " . $mail . "<br>
                son message : " . $message;
  $destinataire = "richard.m@codeur.online";
  $headers = "From: \"expediteur moi\"<moi@domaine.com>\n";
  $headers .= "Reply-To: moi@domaine.com\n";
  $headers .= "Content-Type: text/html; charset=\"iso-8859-1\"";

  // on envoie le mail et on vérifie en même temps qu'il est bien parti
  if (mail($destinataire, $sujet, $mailMessage, $headers)) {
    echo "L'email est bien envoyé <br>";
    echo "nom: " . $nom . "<br>
          mail : " . $mail . "<br>
          message : " .$message . "<br>";
  }
  else {
    echo "Une erreur s'est produite lors de l'envoi de l'email.";
  }

}
?>