var offset = 0;

var slideLength = document.querySelector ('.slider__items');

var next = document.querySelector(".slider__wrapper .next");

var prev = document.querySelector (".slider__wrapper .prev");

next.addEventListener("click", function(){
    offset = offset + 34;

    if (offset > 102) {
        offset = 0;        
    }

    slideLength.style.left = -offset + '%';
});

prev.addEventListener("click",function(){
    offset = offset - 34;

    if (offset < 0) {
        offset = 102;
    }
    
    slideLength.style.left = -offset + '%';
});