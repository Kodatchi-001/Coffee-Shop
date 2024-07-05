//header links
function header_links() {
    const links = document.querySelectorAll('header ul li a');
    links.forEach(element => {
        element.addEventListener('click', function () {
            links.forEach(btn => {
                btn.style.color = '#9ca3af';
            });
            this.style.color = 'black';
        })
    });
}
header_links()
//navbar-responsiv
function navbar_responsiv() {
    const header = document.querySelector('header');
    const header_div_1 = document.querySelector('header div:first-child');
    const header_div_2 = document.querySelector('header div:last-child');
    height_header = '15vh'
    
    if (header.style.height == height_header) {
        header.style.height = ''
        header_div_1.style.height = ''
        header_div_2.style.height = ''
    }
    else{
        header.style.height = height_header
        header_div_1.style.height = '50%'
        header_div_2.style.height = '50%'
    }
}

//Cards slide
function button_slides() {
    // page-2
    document.getElementById('btn-1-page-2').addEventListener('click', () => scrollToSlide_2(0));
    document.getElementById('btn-2-page-2').addEventListener('click', () => scrollToSlide_2(1));
    document.getElementById('btn-3-page-2').addEventListener('click', () => scrollToSlide_2(2));
    document.getElementById('btn-4-page-2').addEventListener('click', () => scrollToSlide_2(3));
    document.getElementById('btn-5-page-2').addEventListener('click', () => scrollToSlide_2(4));
    document.getElementById('btn-6-page-2').addEventListener('click', () => scrollToSlide_2(5));
    document.getElementById('btn-7-page-2').addEventListener('click', () => scrollToSlide_2(6));
    // page-4
    document.getElementById('btn-1-page-4').addEventListener('click', () => scrollToSlide_4(0));
    document.getElementById('btn-2-page-4').addEventListener('click', () => scrollToSlide_4(1));
    document.getElementById('btn-3-page-4').addEventListener('click', () => scrollToSlide_4(2));
    document.getElementById('btn-4-page-4').addEventListener('click', () => scrollToSlide_4(3));
}
button_slides();

function scrollToSlide_2(slideIndex) {
    const slidesContainer = document.querySelector('.cards-slides-page-2');
    slidesContainer.style.transform = `translateX(${slideIndex * -100}%)`;
    update_button(slideIndex)
}

function update_button(index_button) {
    const buttons = document.querySelectorAll('.button-page-2');
    buttons.forEach((button, index) => {
        if (index === index_button) {
            button.style.color = 'white'
            button.style.backgroundColor = 'black'
        } else {
            button.style.color = ''
            button.style.backgroundColor = ''
        }
    });
}

var current_Index_1 = 0;
function cards_page_2_cards_1(direction) {
    const slides = document.querySelectorAll('.card-slides-1');
    const totalSlides = slides.length;
    current_Index_1 = moveSlide(direction, current_Index_1, totalSlides);
    document.querySelector('.cards-1').style.transform = `translateX(${current_Index_1 * -100}%)`;
    const button_index = document.querySelectorAll('.button-1');
    update_button_2(current_Index_1, button_index);
}

var current_Index_3 = 0;
function cards_page_2_cards_3(direction) {
    const slides = document.querySelectorAll('.card-slides-3');
    const totalSlides = slides.length;
    current_Index_3 = moveSlide(direction, current_Index_3, totalSlides);
    document.querySelector('.cards-3').style.transform = `translateX(${current_Index_3 * -100}%)`;
    const button_index = document.querySelectorAll('.button-3');
    update_button_2(current_Index_3, button_index);
}

var current_Index_5 = 0;
function cards_page_2_cards_5(direction) {
    const slides = document.querySelectorAll('.card-slides-5');
    const totalSlides = slides.length;
    current_Index_5 = moveSlide(direction, current_Index_5, totalSlides);
    document.querySelector('.cards-5').style.transform = `translateX(${current_Index_5 * -100}%)`;
    const button_index = document.querySelectorAll('.button-5');
    update_button_2(current_Index_5, button_index);
}

var current_Index_6 = 0;
function cards_page_2_cards_6(direction) {
    const slides = document.querySelectorAll('.card-slides-6');
    const totalSlides = slides.length;
    current_Index_6 = moveSlide(direction, current_Index_6, totalSlides);
    document.querySelector('.cards-6').style.transform = `translateX(${current_Index_6 * -100}%)`;
    const button_index = document.querySelectorAll('.button-6');
    update_button_2(current_Index_6, button_index);
}

function update_button_2(index_button, button_index) {
    button_index.forEach((button, index) => {
        if (index === index_button) {
            button.style.backgroundColor = 'black'
        }
        else {
            button.style.backgroundColor = '#e5e7eb'
        }
    });
}

//button slide
function button_slide() {
    const button_slide = document.querySelectorAll('.button-slide')
    button_slide.forEach(element => {
        element.addEventListener('click', function () {
            button_slide.forEach(btn => {
                btn.style.color = '';
                btn.style.backgroundColor = '';
            });
            this.style.color = 'white';
            this.style.backgroundColor = 'black';
        })
    });
}
button_slide()

// move-slide
function moveSlide(direction, currentIndex, totalSlides) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    return currentIndex;
}

//cards-info
function cards_info() {
    const cards = document.querySelectorAll('.cards-info');
    const style_cards_info = document.querySelector('.style-cards-info')
    const image_cards_info = document.querySelector('.image-cards-info');
    cards.forEach((element, index) => {
        element.addEventListener('click', function () {
            if (index == 0) {
                style_cards_info.style.marginTop = ''
                image_cards_info.src = 'Assets/meting-room.png'
            }
            else if (index == 1) {
                style_cards_info.style.marginTop = '7rem'
                image_cards_info.src = 'Assets/coffee bean.jpg'
            }
            else if (index == 2) {
                style_cards_info.style.marginTop = '14rem'
                image_cards_info.src = 'Assets/work space.jpg'
            }
        })
    });
}
cards_info()

//cards/slides/page-4
function scrollToSlide_4(slideIndex) {
    const slidesContainer = document.querySelector('.cards-slides-page-4');
    slidesContainer.style.transform = `translateX(${slideIndex * -100}%)`;
    update_button_4(slideIndex)
}

function update_button_4(index_button) {
    const buttons = document.querySelectorAll('.button-page-4');
    buttons.forEach((button, index) => {
        if (index === index_button) {
            button.style.color = 'black'
            button.style.fontWeight = '700'
            button.style.borderBottom = '2px solid black'
        }
        else {
            if (index === 0) {
                button.style.color = '#9ca3af'
                button.style.fontWeight = '400'
                button.style.borderBottom = '1px solid #9ca3af'
            }
            else {
                button.style.color = ''
                button.style.fontWeight = ''
                button.style.border = ''
            }
        }
    });
}