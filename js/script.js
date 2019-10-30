window.onscroll=function(){
    myfunction();
}
var nav=document.querySelector(".navigation");
var features=document.querySelector(".footer");

var menubar=document.querySelector(".menubar");
menubar.addEventListener("click",function(){
  nav.classList.toggle("active");

})
function myfunction(){
    var dftop=window.pageYOffset;
    if(dftop>features.offsetTop){
        nav.classList.add("sticky");
    }
    else if(dftop<features.offsetTop){
   nav.classList.remove("sticky");
    }
}