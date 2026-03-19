let slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})


function goNext(){
    counter++;
    if(counter === slides.length){
        counter = 0;
    }
    slideImage();

}

function goPrev(){
    counter--;
    slideImage();
}

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}






