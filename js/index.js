// Queries for html elements
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__item-link");

//  Listener for burger-menu button
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_enabled");
    menuBtn.classList.toggle("menu__btn_enabled");
});

//  Behaviour of menu links
menuLinks.forEach( menuLink => {
    menuLink.addEventListener("click", event => {
        event.preventDefault();
        menuList.classList.remove("menu__list_enabled");  // При натисканні на посилання меню закривається
        let target = document.querySelector(event.target.getAttribute('href'));

        window.scrollTo({
            // Враховуємо висоту місця, що займає блок хедеру
            top: target.offsetTop - document.querySelector(".placeholder").offsetHeight,
            behavior: 'smooth' // Optional: Add smooth scrolling behavior
        });
    })
})

// jQuery initialization
$(document).ready(function(){
    // Site-building slider init
    $('.site-building__content').slick({
        arrows: false,
        dots: true,
        infinite: false,
        draggable: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Testimonials slider init
    $('.testimonials__content').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000,
        draggable: true,
    });

    // Mentors slider init
    $('.mentors__content').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        draggable: true,
    });
});
