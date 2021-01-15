$(function() {

    // $('.questions__slider').slick({
    //     prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"" /></svg></button>',
    //     nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1""/></svg> </button>',
    //     infinite: false,
    // });

    $('.questions__item-title').on('click', function() {

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });

    $('#fullpage').fullpage({

        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        menu: '#header__nav',
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],

    });

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');

    });

    $('.menu__list-link').on('click', function() {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');

    });



});

const card = document.querySelector(".products__inner-card");
const wrapper = document.querySelector(".products__card");

const title = document.querySelector(".products__info ");
const robot = document.querySelector(".products__img");
const circle = document.querySelector(".products__circle");

const purchase = document.querySelector(".products__purchase");
// const description = document.querySelector(".products__discription");



wrapper.addEventListener("mousemove", (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
wrapper.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(50px) rotateX(+10deg)";
    robot.style.transform = "translateZ(110px) rotateX(-20deg)";
    circle.style.transform = "translateZ(30px) rotateZ(-50deg)";
    // description.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(60px)";

});

wrapper.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px) rotateX(0deg)";
    robot.style.transform = "translateZ(0px) rotateX(0deg)";
    circle.style.transform = "translateZ(0px) rotateZ(0deg)";
    // description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

});