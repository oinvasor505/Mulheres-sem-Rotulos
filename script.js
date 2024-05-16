var openMenu = false;
function AbrirMenu()
{
    var logo = document.querySelector(".Logo_header");
    var botao = document.querySelector(".botaoMenu");
    var painel = document.getElementById("painel");
    
    openMenu = !openMenu;
    
    if(openMenu)
    {
        logo.style.left = "25vw";
        botao.style.left = "16vw";
        painel.style.left = "-5vw";
    }
    else{
        logo.style.left = "0";
        botao.style.left = "0";
        painel.style.left = "-20vw";
    }
}

let timer;
let slideIndex = 0;
const slides = document.querySelectorAll('.imagem');
function moverSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;
    clearTimeout(timer);
    iniciarTimer();
}
function iniciarTimer() {
    timer = setTimeout(function(){  moverSlide(1)   }, 3000);
}
window.onload = function() {    iniciarTimer(); };
window.onscroll = function() {  EfeitosDoScrool();   };

function EfeitosDoScrool() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20)
    {
        openMenu= true;
        AbrirMenu();
        document.querySelector(".botaoMenu").style.left = "-5vw";
        document.querySelector("header").style.opacity = "0";
        document.querySelector("header img").style.left = "-50vw";
        document.querySelector("header h1").style.left = "100vw";
        
    } else {
        document.querySelector(".botaoMenu").style.left = "0";
        document.querySelector("header").style.opacity = "100%";
        document.querySelector("header img").style.left = "0";
        document.querySelector("header h1").style.left = "50vw";

    }
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 125)
    {
        document.querySelector(".footer_logo").style.opacity = "100%";
        document.querySelector(".footer_logo").style.width = "15vw";

    } else {
        document.querySelector(".footer_logo").style.opacity = "0";
        document.querySelector(".footer_logo").style.width = "10vw";
    }
}

const keywords = document.querySelectorAll('.keyword');

keywords.forEach(keyword => {
  moveKeyword(keyword);
});
function moveKeyword(keyword) {

    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const keywordWidth = keyword.offsetWidth;
    const keywordHeight = keyword.offsetHeight;

    const randomY = Math.floor(Math.random() * (screenHeight - keywordHeight));
    const randomX = Math.floor(Math.random() * (screenWidth - keywordWidth));

    keyword.style.top = randomY + 'px';
    keyword.style.left = randomX + 'px';

    setInterval(() => {
        const newY = Math.floor(Math.random() * (screenHeight - keywordHeight));
        const newX = Math.floor(Math.random() * (screenWidth - keywordWidth));
        keyword.style.top = newY + 'px';
        keyword.style.left = newX + 'px';
    }, 2000); // Ajuste este valor para controlar a velocidade de movimento
    
}