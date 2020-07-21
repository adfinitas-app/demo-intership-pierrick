let cal_menu = document.getElementsByClassName('menu--calendar')
let cal_items = cal_menu[0].children
let cal_containers = document.getElementsByClassName('calendar__container')

for (var i = 0 ; i < cal_items.length ; i++) {
  cal_items[i].addEventListener("click", function(){
    item_click_cal(this, cal_items);
  });
}

function item_click_cal(element, cal_items) {
  let active = get_active_cal(cal_items);
  let container = element.dataset.action;
  
  if (!element.classList.contains('active')) {
    active.classList.remove('active');
    element.classList.add('active');
    toggle_container_cal(cal_containers, container);
  }
}

function get_active_cal(cal_items) {
  for (var i = 0 ; i < items.length ; i++) {
    if (cal_items[i].classList.contains('active')) {
      return cal_items[i];
    }
  }
}

function toggle_container_cal(cal_containers, container) {
  for (var i = 0 ; i < containers.length ; i++) {
    $(cal_containers[i]).fadeOut(500)
  }
  $("#" + container).delay(499).fadeIn(1000);
}