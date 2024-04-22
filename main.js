let span = document.querySelector(".up");


window.onscroll = function () {
    if (this.scrollY >= 1000){
        span.classList.add("show");
    } else{
        span.classList.remove("show");
    }
};



window.onclick = function (){
    scrollTo({
        top : 0 ,
        behavior:"smooth"
    });
};  
