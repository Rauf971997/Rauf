let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >=offset && top <offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })

    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100); 

    // Remove toggle Icon
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

// Sticky navbar







// Scroll js
ScrollReveal({ 
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay:200

});


ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img,.heading', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p,.certificat-photo, .about-content', { origin: "right" });


// Type.js

let typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
  });








// Modal slider for certificate

$(document).ready(function(){
    var images = $('.certificat-item img'); // Получаем все изображения
     
    // Обработчик события клика на изображение в слайдере, но только для не-мобильных устройств
    if ($(window).width() > 768) {
        $('.certificat-photo').on('click', '.certificat-item img', function(event) {
            event.preventDefault(); // Отмена действия клика по умолчанию
            var imageUrl = $(this).attr('src');
            $('#modalImg').attr('src', imageUrl);
            $('#sliderModal').fadeIn('slow'); // Добавляем анимацию появления
        });
    }

    // Закрытие модального окна при клике на кнопку закрытия
    $('.close').click(function(){
        $('#sliderModal').fadeOut('slow'); // Добавляем анимацию исчезновения
    });

    // Переключение на предыдущее изображение
$('.prev').click(function() {
    var currentImage = $('#modalImg').attr('src');
    var currentIndex = images.index(images.filter("[src='" + currentImage + "']"));
    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    var prevImage = images.eq(prevIndex).attr('src');
    $('#modalImg').attr('src', prevImage);
});

// Переключение на следующее изображение
$('.next').click(function() {
    var currentImage = $('#modalImg').attr('src');
    var currentIndex = images.index(images.filter("[src='" + currentImage + "']"));
    var nextIndex = (currentIndex + 1) % images.length;
    var nextImage = images.eq(nextIndex).attr('src');
    $('#modalImg').attr('src', nextImage);
});

});





$(document).ready(function(){
    var diplomaImages = $('.diploma img'); // Получаем все изображения дипломов
     
    // Обработчик события клика на изображение диплома
    $('.diploma-wrapper').on('click', '.diploma img', function() {
        var imageUrl = $(this).attr('src');
        $('#diplomaModalImg').attr('src', imageUrl);
        $('#diplomaModal').fadeIn('slow'); // Добавляем анимацию появления
    });

    // Закрытие модального окна при клике на кнопку закрытия
    $('.close').click(function(){
        $('#diplomaModal').fadeOut('slow'); // Добавляем анимацию исчезновения
    });

    // Переключение на предыдущее изображение диплома
    $('.prev').click(function() {
        var currentImage = $('#diplomaModalImg').attr('src');
        var currentIndex = diplomaImages.index(diplomaImages.filter("[src='" + currentImage + "']"));
        var prevIndex = (currentIndex - 1 + diplomaImages.length) % diplomaImages.length;
        var prevImage = diplomaImages.eq(prevIndex).attr('src');
        $('#diplomaModalImg').attr('src', prevImage);
    });

    // Переключение на следующее изображение диплома
    $('.next').click(function() {
        var currentImage = $('#diplomaModalImg').attr('src');
        var currentIndex = diplomaImages.index(diplomaImages.filter("[src='" + currentImage + "']"));
        var nextIndex = (currentIndex + 1) % diplomaImages.length;
        var nextImage = diplomaImages.eq(nextIndex).attr('src');
        $('#diplomaModalImg').attr('src', nextImage);
    });
});
