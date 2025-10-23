/*
Esercizio di oggi: Email List

Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/

//Postman verification result of the email:
/*
- https://flynn.boolean.careers/exercises/api/random/mail
{
    "success": true,
    "response": "ngraham@fadel.biz"
}
*/

//Faccio una variabile per includere url nel main.js (faccio sotto forma di una variabile con la stringa)
const urlEmail = "https://flynn.boolean.careers/exercises/api/random/mail";
//Una variabile per richiamare il div con l'id
const listaEmail = document.getElementById('emailList');

//The keyword async before a function makes the function return a promise (JS ASYNC/AWAIT)
