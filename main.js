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
//Variabile per generare un tot numero di email
const emailNum = 10;

//The keyword async before a function makes the function return a promise (JS ASYNC/AWAIT)
async function generateEmails() {
    //Creo un array vuota 
    const emailArray = [];
    //Uso il ciclo for per push 10 volte nell'array
    for (let i = 0; i < emailNum; i++) {
        emailArray.push(axios.get(urlEmail));
    };
    const responses = await Promise.all(emailArray);
    //Uso map per estrarre email
    const emails = responses.map(response => response.data.response);
    //Costruisco lista HTML
    const listItems = emails.map(email => `<li>${email}</li>`).join('');
}