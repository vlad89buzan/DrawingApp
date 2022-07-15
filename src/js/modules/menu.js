const body = document.querySelector('body');
const headerMenu = document.querySelector('.menu__body');
const menuTriggerOpen = document.querySelector('.trigger__open');
const menuTriggerClose = document.querySelector('.trigger__close');
if (menuTriggerOpen) {
    menuTriggerOpen.addEventListener('click', function (e) {
        headerMenu.classList.toggle('show');
        body.style.overflowY = "hidden";
    });
}
if (menuTriggerClose) {
    menuTriggerClose.addEventListener('click', function (e) {
        const headerMenu = document.querySelector('.menu__body');
        headerMenu.classList.toggle('show');
        body.style.overflowY = "scroll";
    });
}