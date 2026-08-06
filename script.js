const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

if(window.scrollY > 30){

navbar.style.background = "rgba(255,255,255,.8)";
navbar.style.boxShadow = "0 20px 40px rgba(0,0,0,.1)";

}else{

navbar.style.background = "rgba(255,255,255,.5)";
navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

}

});

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-2px)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0px)";

});

});
