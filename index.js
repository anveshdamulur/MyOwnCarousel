const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("previous")
const slides = document.getElementsByClassName("carousel-item")

let currentSlide = 0;

nextBtn.addEventListener("click", moveToNextSlide)
prevBtn.addEventListener("click", moveToPrevSlide)

function hideAllSlides(){
    for(let slide of slides){
        console.log(slide)
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}


function moveToNextSlide(){
    hideAllSlides()
    if(currentSlide === slides.length -1){
        currentSlide = 0
    }
    else{
        currentSlide ++
    }
    console.log(slides[currentSlide])
   slides[currentSlide].classList.add("carousel-item-visible")
}

function moveToPrevSlide(){
    hideAllSlides()
    if(currentSlide === 0){
        currentSlide = slides.length -1
    }
    else{
        currentSlide --
    }
    slides[currentSlide].classList.add("carousel-item-visible")
}