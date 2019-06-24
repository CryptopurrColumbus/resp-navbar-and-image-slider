const carouselSlide = document.querySelector('.carousel-slide');
console.log(carouselSlide);
const carouselImages = document.querySelectorAll('.carousel-slide img');
console.log(carouselImages);
const prevBtn = document.querySelector('#prevBtn');
console.log(prevBtn);
const nextBtn = document.querySelector('#nextBtn');
console.log(nextBtn);
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size);
carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length-1) {return;}

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) {return;}
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter]);
   if (carouselImages[counter].id === "last-clone"){
       carouselSlide.style.transition ="none";
       counter = carouselImages.length -2;
       carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
   }

})

carouselSlide.addEventListener('transitionend', () => {
    console.log(carouselImages[counter]);
   if (carouselImages[counter].id === "last-clone"){
       carouselSlide.style.transition ="none";
       counter = carouselImages.length -2;
       carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
   }
   if (carouselImages[counter].id === "first-clone"){
    carouselSlide.style.transition ="none";
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) +'px)';
   }
})

