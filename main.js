const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toogleDesktopMenu);
burguerIcon.addEventListener('click', toogleMobileMenu )
menuCartIcon.addEventListener('click', toogleCartAside);

function toogleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive')

    desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toogleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}