let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let ext = document.getElementById('ext');
let rmb = document.getElementById('rmb');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar. classList. toggle('active')
}

function readmoreext(){
    ext.style.display="block"
    rmb.style.display="none"
    rml.style.display="block"
}

function readlessext(){
    ext.style.display="none"
    rmb.style.display="block"
    rml.style.display="none"
}

var typed = new Typed('.element', {
      strings: ['Frontend Developer', 'UI/UX Designer', 'Freelancer'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

