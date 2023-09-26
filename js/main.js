/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';


//récupération du body
const body = document.querySelector('body');

//récupérer de la liste deroulante
 const listeBackground = document.getElementById('bg');
//charger l'image par defaut
body.style.backgroundImage = `url(./img/backgrounds/${listeBackground.value}`;
/

//ecouter un evenement de type "change" sur la liste deroulante
listeBackground.addEventListener('change', function(){
    body.style.backgroundImage = `url(./img/backgounds/${listeBackground.value}`;
});
/************************
 envoie du formulaire
 **************************/

//récupération du formulaire
const formulaire = document.querySelector('form');
const txtMdp = document.querySelector('#mot de passe');
const txtConfirmation = document.querySelector('#confirmation');
const btCreerCompte = document.querySelector('form button[ type="submit"]');

console.log(txtMdp,txtConfirmation,btCreerCompte);
//ecouter un evenement  de type "submit" (envoie formulaire)
formulaire.addEventListener('submit', function (event){
    console.log(event.target);//récupère l'élément qui a declenché l'evenement
    //stopper l'evenement l'evenement par défaut (envoi du formulaire)
    event.preventDefault();
    if (txtMdp.value.length < 3 || txtMdp.value !== txtConfirmation.value){
        alert('Les mots de passe ne correspondent pas !');
        return; //arrete la fonction
    }
    alert('Compte créé avec succès!');
    btCreerCompte.classList.add('animate__heartBeat');
    //envoye le formulaire
    formulaire.submit();
});



