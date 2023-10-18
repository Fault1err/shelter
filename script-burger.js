const menu = document.querySelector('.burger_menu_box');
const menuBtn = document.querySelector('.burger_menu_name');
const innerBurgerMenu = document.querySelector('.burger_menu_name_inner');
const fogging = document.querySelector('.fogging');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('burger_active');
        innerBurgerMenu.classList.toggle('burger_active_inner');
        fogging.classList.toggle('fogging_active');
        body.classList.toggle('lock');
    })

    menu.addEventListener('click', e => {
        if (e.target.classList.contains('fa-xmark')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('burger_active');
            innerBurgerMenu.classList.remove('burger_active_inner');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        }
    })

    fogging.addEventListener('click', e => {
        if (e.target.classList.contains('fogging_active')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('burger_active');
            innerBurgerMenu.classList.remove('burger_active_inner');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        }
    })

    menu.querySelectorAll('.burger_menu_link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('burger_active');
            innerBurgerMenu.classList.remove('burger_active_inner');
            fogging.classList.remove('fogging_active');
            body.classList.remove('lock');
        })
    })

    innerBurgerMenu.addEventListener('click', e => {
        menu.classList.remove('active');
        menuBtn.classList.remove('burger_active');
        innerBurgerMenu.classList.remove('burger_active_inner');
        fogging.classList.remove('fogging_active');
        body.classList.remove('lock');

    })
}


// function burgerMove() {
//     const burgerMenu = document.querySelector('.burger_menu_name');
//     burgerMenu.addEventListener('click', () => {
//         burgerMenu.classList.toggle('burger_active');
//     });
// };

// burgerMove();

// function innerBurgerMove() {
//     const innerBurgerMenu = document.querySelector('.burger_menu_name_inner');
//     innerBurgerMenu.addEventListener('click', () => {
//         innerBurgerMenu.classList.toggle('burger_active_inner');
//     });
// };

// innerBurgerMove();
