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


let containerHead = document.getElementsByClassName('container-head')
let navItem = document.getElementsByClassName('nav-i');
let header = document.getElementsByClassName('header')[0];
let headers = ['default', 'france', 'palestine', 'syrie']

function toggle_header(action) {
  for (var i = 0 ; i < containerHead.length ; i++) {
    $(containerHead[i]).fadeOut()
    if (containerHead[i].classList.contains('container--' + action)) {
      setTimeout(function() {
        header.classList.add('header--' + action);
        $(header).show();
      }, 500);
      $(containerHead[i]).delay(1000).fadeIn(500);
    }
    setTimeout(() => {
      for (var x = 0 ; x < headers.length ; x++) {
        if (headers[x] != action) {
          header.classList.remove('header--' + headers[x]);
        }
      }
    }, 600);
  }
  if (window.width <= 640) {
    toggle_navigation_bar();
  }
}

for (var i = 0 ; i < navItem.length ; i++) {
  navItem[i].addEventListener('click', function() {
    for (var i = 0 ; i < navItem.length ; i++) {
      navItem[i].style.color = 'rgba(255, 255, 255, .6)';
    }
    this.style.color = 'rgba(255, 255, 255, 1)';
    if (!header.classList.contains('header--' + this.dataset['action']))
      toggle_header(this.dataset['action'])
  });
}