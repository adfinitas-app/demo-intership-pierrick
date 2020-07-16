function toggle_navigation_bar() {
  let navigation = document.getElementsByClassName('navigation')[0];

  if (navigation.classList.contains('navigation--collapsed')) {
    navigation.classList.remove('navigation--collapsed');
    document.getElementById('nav-button').classList.add('button--little');
    navigation.children[2].style.display = 'none';
    document.body.style.overflow = 'hidden auto';
  } else {
    document.getElementById('nav-button').classList.remove('button--little');
    navigation.classList.add('navigation--collapsed');
    navigation.children[2].style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}