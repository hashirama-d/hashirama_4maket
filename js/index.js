const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list")

//  Тригер кнопки для бургер-меню
menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list_enabled");
    menuBtn.classList.toggle("menu__btn_enabled");
});

//  Поведінка для посилань у меню
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        menuList.classList.toggle("menu__list_enabled");  // При натисканні на посилання меню закривається
        let target = document.querySelector(event.target.getAttribute('href'));

        window.scrollTo({
            // Враховуємо висоту місця, що займає блок хедеру
            top: target.offsetTop - document.querySelector(".placeholder").offsetHeight,
            behavior: 'smooth' // Optional: Add smooth scrolling behavior
        });
    }
});