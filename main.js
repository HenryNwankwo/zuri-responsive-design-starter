const menuBtn = document.querySelector('.menu_btn');
const menuBtnBurger = document.querySelector('.menu_btn_burger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('.nav-bar');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenuBtn);

function toggleMenuBtn(){

    if(!showMenu){

        menuBtnBurger.classList.add('open');
        navLinks.classList.add('open');
        navBar.classList.add('open');

        showMenu = true;

    }else{

        menuBtnBurger.classList.remove('open');
        navLinks.classList.remove('open');
        navBar.classList.remove('open');
        showMenu = false;

    }
}
