let menuBtn = document.querySelector('.hamburger');
let aside = document.querySelector('.aside');
let body = document.querySelector('body');
let asideItem = document.querySelector('aside__item')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    aside.classList.toggle('active');
    body.classList.toggle('active');
})
asideItem.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    aside.classList.remove('active');
    body.classList.remove('active');
})