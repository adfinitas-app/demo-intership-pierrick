let menu = document.getElementsByClassName('menu--donation');
let items = menu[0].children;
let containers = document.getElementsByClassName('donation__container');

for (var i = 0 ; i < items.length ; i++) {
  items[i].addEventListener("click", function(){
    item_click(this, items);
  });
}

function item_click(element, items) {
  let active = get_active(items);
  let container = element.dataset.action;
  
  if (!element.classList.contains('active')) {
    active.classList.remove('active');
    element.classList.add('active');
    toggle_container(containers, container);
    set_data_in_graph(container)
  }
}

function get_active(items) {
  for (var i = 0 ; i < items.length ; i++) {
    if (items[i].classList.contains('active')) {
      return items[i];
    }
  }
}

function toggle_container(containers, container) {
  for (var i = 0 ; i < containers.length ; i++) {
    $(containers[i]).fadeOut(500)
  }
  $("#" + container).delay(499).fadeIn(1000);
}