const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''),
      angleStep = 360 / letters.length

homeText.textContent = ''

letters.forEach((char, i) => {
   const span = document.createElement('span')
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)`
   homeText.appendChild(span)
})

const typedHome = new Typed('#home-typed', {
   strings: ['Freelancer', 'Web Developer', 'Game Developer', 'Video Editor', 'Graphic Designer'],
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true,
})


/*=============== CHANGE HEADER STYLES ===============*/


/*=============== SWIPER WORK ===============*/ 


/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
