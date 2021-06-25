import React from 'react';
import './index.css';
import './App.css'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react';
import validator from 'validator'
import axios from 'axios';


export default function Home(){ 
 
  var [emailInput, setEmailInput] = useState("");
  
  const prenumeruoti = (e) => {
    e.preventDefault();


 
  const url = new URL(
    "https://www.sculpterdev.site/api/createNotification"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": emailInput
}
console.log(headers)
console.log(body)
var email = emailInput
var input = document.getElementByClassName('emInput slidein')
input.setCustomValidity('Šis laukas negali būti tuščias');
if (validator.isEmail(email)) {

  axios.post(url, body).then(res => {
    
    console.log(res)
    alert("Sėkmingai prenumeruota")
    console.log(sessionStorage.getItem('regemail')
    
    )
  })
  .catch((error) => {
    alert("Paštas jau egzistuoja")
    console.log(error);
  })
} else {
  alert("Netinkamas paštas")
}
}



return(

      <CSSTransition in={true} appear={true} timeout={2500} classNames="my-node">
        <div className = "App" >
         
          <div className = "shades shadeslidein">
              <div style={{display:'flex',   flexDirection:"row"}}></div>
              <div className = "header slidein">
              Raskite tinkamą darbą jūsų mieste.
              </div>
              <h4 className = "tekst slidein">
              Šimtai darbo pasilūlymų jūsų mieste ir netik.
              Įveskite savo el. paštą ir mes pranešime kai platforma taps pasiekiama.
              </h4>
              <form onSubmit={prenumeruoti} style={{marginLeft:"5%", height:"300px", display:"flex", flexDirection:"column"}}>
              <input id="asd" required type = "email" onChange={event => setEmailInput(event.target.value)}  className = "emInput slidein" placeholder = " El. pašto adresas"></input> 

              <button type = 'submit' className= "redBtn slidein" >Prenumeruoti</button>
              </form>
             
              
            </div>
         
        </div>
      </CSSTransition>
//  


)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
