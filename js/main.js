var prev = document.getElementById("prev");
var next = document.getElementById("next");
var miniatura = document.getElementsByClassName("thumbnail");
var hero = document.getElementById('hero');

var bgImagenes = new Array(
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg",
);

let i = 0;
next.addEventListener('click', function(){
    if(i<8){
        hero.style.backgroundImage = "url('"+bgImagenes[i+1]+"')";
        miniatura[i+1].classList.add('active');
        miniatura[i].classList.remove('active');
        i++;
    }
});

prev.addEventListener('click', function(){
    if(i>0){
        hero.style.backgroundImage = "url('"+bgImagenes[i-1]+"')";
        miniatura[i-1].classList.add('active');
        miniatura[i].classList.remove('active');
        i--;
    }
});