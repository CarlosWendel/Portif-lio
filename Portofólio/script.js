var hamburguer = document.querySelector(".Hamburguer");

hamburguer.addEventListener("click", function(){
    var sidebar = document.querySelector(".sidebar").classList.toggle("show-menu");
})
hamburguer.addEventListener("click",function(){
    var hamb= document.querySelector(".Hamburguer").classList.toggle("hambur");
})