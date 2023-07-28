console.log("Welcome Radhika");

let ul = document.getElementById("next-ul");
let navbar = document.getElementsByClassName("next-navs")[0];
let hamburger = document.getElementsByClassName("hamburger-line")[0];

hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("show");
    ul.classList.toggle("h-class");
});

let b = document.getElementsByClassName("btn");
let btn = [b[0],b[1],b[2]];
btn[0].addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://youtu.be/sRE90qnAlDA");


});

btn[1].addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://youtu.be/OReWk4zkUms");

});

btn[2].addEventListener("click",(e)=>{
    e.preventDefault();
    window.open("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj_86zE2rGAAxULVN4KHR-CAdMQwqsBegQIEBAG&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOdJloRP-Nak&usg=AOvVaw1CDk9l20tiEQ1BBOPIYb2K&opi=89978449");

});

