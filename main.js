var imgs = Array.from(document.querySelectorAll(".item img") );
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var closeItem = document.getElementById("close");
var nextItem = document.getElementById("next");
var prevItem = document.getElementById("prev");

var currentIndex = 0;
for(var i =0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click",function(e){
        boxContainer.style.display = "flex" ;
        var imgSrc = e.target.getAttribute("src")
        console.log(e.target.getAttribute("src"));
        innerBox.style.backgroundImage = ' url(' + imgSrc + ')'
        currentIndex = imgs.indexOf(e.target)
    })
}

nextItem.addEventListener("click", nextSlide)
function nextSlide(){
    currentIndex++ ;
    if(currentIndex == imgs.length){
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src") ;
    innerBox.style.backgroundImage = ' url(' + imgSrc + ')' ;
}


prevItem.addEventListener("click" , prevSlide)

function prevSlide(){
    currentIndex-- ;
    if(currentIndex < 0){
        currentIndex = imgs.length - 1 ;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = ' url(' + imgSrc + ')' ;
}

closeItem.addEventListener("click",closeSlide)

function closeSlide(){
    boxContainer.style.display = "none" ;
}

boxContainer.addEventListener("click" , function(e){
    console.log(e.target.getAttribute("id") == "boxContainer");
    if(e.target.getAttribute("id") == "boxContainer"){
        closeSlide()
    }
})
// ---------------- Even KeyBoard
document.addEventListener("keyup" , function(e){
    console.log(e);
    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown'){
        prevSlide();
    }
    else if (e.code == 'ArrowRight' || e.code == 'ArrowUp'){
        nextSlide();
    }
    else if (e.code == 'Escape' || e.code == 'Backspace' || e.code == 'Delete' || e.code == 'Space'){
        closeSlide();
    }
})