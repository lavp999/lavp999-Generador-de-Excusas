/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/
window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  // let who = ['the dog','my granma','his turtle','my bird'];
  let what = ['eat','pissed','crushed','broked'];
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

  let  aleatorio = (max) => { 
    let n = Math.round(Math.random() * (max-1));
    console.log(n);
    return n;
  };
  
  let who = () => {
    let arr = ['the dog','my granma','his turtle','my bird'];
    let n = aleatorio(arr.length);
    return arr[n];
  };

  const valor = window.document.querySelector("#excuse");
  valor.textContent = who() +" "+ 
                      what[aleatorio(what.length)] +' '+ 
                      when[aleatorio(when.length)];
};
