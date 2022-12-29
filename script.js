let button = document.getElementById('popUpButton');
let body = document.querySelector('body');
let popUp= document.getElementById('popUp');
let closePopUp = document.getElementById('closePopUp');

button.addEventListener('click', ()=>{
    popUp.style.visibility='visible'
});

closePopUp.addEventListener('click', ()=>{
    popUp.style.visibility='hidden';
});