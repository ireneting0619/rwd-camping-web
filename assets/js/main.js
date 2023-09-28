/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW===============*/
if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN===============*/
if(navClose){
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.getElementById('nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById(nav-menu)
    // 當點擊nav__link的時候移除show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' ,linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/
