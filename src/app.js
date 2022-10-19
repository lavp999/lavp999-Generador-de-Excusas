/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/
window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let who = ['the dog','my granma','his turtle','my bird'];
  let what = ['eat','pissed','crushed','broked'];
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

  let who = () => {
    let arr = ['the dog','my granma','his turtle','my bird'];
    return arr[Math.round(Math.random() * (4 - 1) + 1)] +' '+ 
  }

  const valor = window.document.querySelector("#excuse");
  valor.textContent = who[Math.round(Math.random() * (4 - 1) + 1)] +' '+ 
                      what[Math.round(Math.random() * (4 - 1) + 1)] +' '+ 
                      when[Math.round(Math.random() * (5 - 1) + 1)];

/*
valor.textContent = who[Math.round(Math.random() * (4 - 1) + 1)] +' '+ 
                      what[Math.round(Math.random() * (4 - 1) + 1)] +' '+ 
                      when[Math.round(Math.random() * (5 - 1) + 1)];

*/

};
