const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__item-link");

//  Тригер кнопки для бургер-меню
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_enabled");
    menuBtn.classList.toggle("menu__btn_enabled");
});

//  Поведінка для посилань у меню
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
