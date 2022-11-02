let menuVisible = false;

function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    
});

sr.reveal(`.swiper2`, {
interval: 100,
});

sr.reveal(`.swiper, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });


var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});