$('.nav-link-dropdown')[0].addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    $('.dropdown-menu').toggleClass('active');
})