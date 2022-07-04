
const dice = document.querySelector("#advice-generator");
const adviceID = document.querySelector("#advice-id");
const adviceText = document.querySelector(".advice-container");


const adviceGenerator = async event =>{
    event.preventDefault();
try{
     fetch('https://api.adviceslip.com/advice',{cache: "no-store"})


.then(response => response.json())
.then(data => {
adviceID.textContent = data.slip.id;
adviceText.textContent = data.slip.advice;
});


}
catch(error){
    console.log("The error is: " + error);
}
   
}


window.addEventListener('DOMContentLoaded', adviceGenerator);
dice.addEventListener('click', adviceGenerator);


