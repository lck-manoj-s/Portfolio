/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Python Coder","Django Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- CERTIFICATION BOX -- */
sr.reveal('.certificate-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')


  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

/* ----- TO DOWNLOAD CV IN ABOUT SECCTION ----- */
document.getElementById('downloadCV').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'assets/My-CV.pdf';
  link.target = '_blank';
  link.download = 'my-cv.pdf';
  link.click();
});

/* ----- TO SEND EMAILS ----- */

document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send('service_4nqh80i', 'template_vzibtqt', {
      from_name: name,
      from_email: email,
      message: message,
  })
  .then(function(response) {
      alert('Your message has been emailed to Manoj S');
  }, function(error) {
      alert('Failed to send message. Please try again later.');
  });
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

/* ----- TO CHANGE THEME ----- */

let DarkTheme = false;

function UpdateTheme(flag){
  const AvatarPath = document.getElementById("avatar_image");
  if (flag){
    AvatarPath.src = 'assets/images/avatar-black.png';

    document.documentElement.style.setProperty('--body-color','rgb(1,1,1)')

    document.documentElement.style.setProperty('--text-color-first','rgb(255,254,250)')
    document.documentElement.style.setProperty('--text-color-second',' rgb(255, 0, 0)')
    document.documentElement.style.setProperty('--text-color-third','rgb(200, 7, 7)')
    document.documentElement.style.setProperty('--text-color-fourth','rgb(255,102,100)')
    document.documentElement.style.setProperty('--text-color-fifth','rgb(255,255,255)')

    document.documentElement.style.setProperty('--first-color','rgb(255, 102, 102)')
    document.documentElement.style.setProperty('--first-color-hover','rgb(255, 161, 151)')
    document.documentElement.style.setProperty('--first-shadow-color','rgba(255, 255, 255, 0.1)')

    document.documentElement.style.setProperty('--second-color','rgb(255, 0, 0)')
    document.documentElement.style.setProperty('--third-color','rgb(220, 20, 60)')

    document.documentElement.style.setProperty('--icon-color','rgb(255,255,255)')
    document.documentElement.style.setProperty('--icon-shadows','rgba(255, 255, 255, 0.2)')
    document.documentElement.style.setProperty('--navbar-color','rgb(255, 255, 255)')
  }
  else{
    AvatarPath.src = 'assets/images/avatar.png';
    document.documentElement.style.setProperty('--body-color','rgb(255,255,255)')

    document.documentElement.style.setProperty('--text-color-first','rgb(119,119,119)')
    document.documentElement.style.setProperty('--text-color-second','rgb(68, 68, 68)')
    document.documentElement.style.setProperty('--text-color-third','rgb(7, 184, 200)')
    document.documentElement.style.setProperty('--text-color-fourth','rgb(119,119,119)')
    document.documentElement.style.setProperty('--text-color-fifth','rgb(68,68,68)')

    document.documentElement.style.setProperty('--first-color','rgb(68, 214, 255)')
    document.documentElement.style.setProperty('--first-color-hover','rgb(102, 210, 231)')
    document.documentElement.style.setProperty('--first-shadow-color','rgba(0, 0, 0, 0.1)')

    document.documentElement.style.setProperty('--second-color','rgb(0, 201, 255)')
    document.documentElement.style.setProperty('--third-color','rgb(218, 165, 32)')

    document.documentElement.style.setProperty('--icon-color','rgb(68,68,68)')
    document.documentElement.style.setProperty('--icon-shadows','rgba(0,0,0,0.1)')
    document.documentElement.style.setProperty('--navbar-color','rgb(0, 0, 0)')
  }
}

document.getElementById("theme_button").addEventListener('click',function(){
  DarkTheme = !DarkTheme;
  UpdateTheme(DarkTheme);
});

UpdateTheme(DarkTheme);
