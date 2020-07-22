let navbar = document.getElementsByClassName('navigation')[0];
let navbarOffset = navbar.offsetTop;
let toggler = document.getElementsByClassName('navigation__toggler')[0];
let banner = document.getElementsByClassName('banner')[0];

toggler.addEventListener('click', function(){
});

window.onscroll = function() {
  if (window.pageYOffset >= navbarOffset) {
    navbar.classList.add("nav-fixed")
  } else {
    navbar.classList.remove("nav-fixed");
  }
};

function toggle_navigation_bar() {
  let navigation = document.getElementsByClassName('navigation')[0];

  if (navigation.classList.contains('navigation--collapsed')) {
    navigation.classList.remove('navigation--collapsed');
    navigation.children[2].style.display = 'none';
    document.body.style.overflow = 'hidden auto';
    banner.style.display = 'flex';
    document.getElementById('nav-call-action').style.display = 'block';

  } else {
    navigation.classList.add('navigation--collapsed');
    navigation.children[2].style.display = 'block';
    document.body.style.overflow = 'hidden';
    banner.style.display = 'none';
    document.getElementById('nav-call-action').style.display = 'none';
  }
}

$(document).ready(() => {
  function loopIcon() {
    $('.item-with-icon').fadeTo("slow", 0.5, () => {
      setTimeout(function() {
        loopIcon2();
      }, 250);
    });
  }
  function loopIcon2() {
    $('.item-with-icon').fadeTo("slow", 1, () => {
      setTimeout(function() {
        loopIcon();
      }, 250);
    });
  }
  if ($(window).width() >= 640) {
    loopIcon();
  }
})