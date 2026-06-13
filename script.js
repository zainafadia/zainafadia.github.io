
// Mobile Menu

const hamburger =
document.getElementById("hamburger");

const menu =
document.getElementById("menu");


hamburger.addEventListener(
"click",
()=>{

menu.classList.toggle("active");

}

);




// Tahun otomatis

document.getElementById("year").innerHTML =
new Date().getFullYear();




// Scroll Animation

const cards =
document.querySelectorAll(".card,.project-card");


window.addEventListener(
"scroll",
()=>{

cards.forEach(card=>{


const posisi =
card.getBoundingClientRect().top;


if(posisi <
window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}


});


}

);
