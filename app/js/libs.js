let inputPhone = document.querySelectorAll('input[type="tel"]');
let popupForm = document.querySelectorAll('.popup__form');

// -----------------------------------------------------------------

AOS.init({
    duration: 1000,
    once: true
});

// -----------------------------------------------------------------

let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputPhone);

// -----------------------------------------------------------------

function validateForms(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules
    });
}

validateForms('.popup__form', {
    name: {
        required: true
    },
    phone: {
        required: true
    },
    checkbox: {
        required: true
    }
});

validateForms('.contact-form', {
    name: {
        required: true
    },
    phone: {
        required: true
    },
    checkbox: {
        required: true
    },
    file: {
        require: true
    }
});

// ----------------------------------------------------------

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: true,
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});