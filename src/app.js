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

  const  aleatorio = (max) => { 
    return Math.round(Math.random() * (max-1));
  };
  
  const componer = (parte) => {
    const arr = {"who" :['the dog','my granma','his turtle','my bird'],
                 "what":['eat','pissed','crushed','broked'],
                 "when":['before the class','right in time','when I finished','during my lunch','while I was praying']
                };

    return arr[parte][aleatorio(arr[parte].length)];
  };

  const valor = window.document.querySelector("#excuse");
  valor.textContent = componer('who')  +' '+ 
                      componer('what') +' '+ 
                      componer('when');
};
