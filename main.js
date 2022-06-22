/*Menu burger*/

const burger = document.getElementsByClassName('burger');
const menu = document.getElementsByClassName('menu');

burger[0].addEventListener('click', function(){
    menu[0].classList.toggle('show');
});

/*Survol de la carte*/

const carte = document.getElementById('carte');
const text = document.getElementById('survol');
const opacity = document.getElementById('liencarte')

opacity.addEventListener('pointerenter', function(){
    text.classList.toggle('show');
    carte.classList.toggle('opacity');
});

opacity.addEventListener('pointerleave', function(){
    text.classList.toggle('show');
    carte.classList.toggle('opacity')
});