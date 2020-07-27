let width = window.innerWidth;
let rollover = document.getElementsByClassName('rollover');

for (var i = 0 ; i < rollover.length ; i++) {
  let text = rollover[i].dataset['text'];
  
  if (width < 640) {
    rollover[i].addEventListener('click', function() {
      this.insertAdjacentHTML('afterend', get_rollover(text));
      rollover_cross();
    });
  } else {
    rollover[i].addEventListener('mouseover', function() {
      this.insertAdjacentHTML('afterend', get_rollover(text));
      rollover_unhover();
    });
  }
}

function rollover_unhover() {
  let rollover_pop = document.getElementsByClassName('roll-over');
  
  for (var i = 0 ; i < rollover_pop.length ; i++) {
    rollover_pop[i].addEventListener('mouseout', function() {
      this.remove();
    });
  }
}

function rollover_cross() {
  let cross = document.getElementsByClassName('roll-over__cross');
  
  for (var i = 0 ; i < cross.length ; i++) {
    cross[i].addEventListener('click', function() {
      this.parentNode.remove();
    });
  }
}

function get_rollover(text) {
  let new_rollover = '<div class="roll-over">' +
  '<div class="roll-over__cross">' +
  '<div class="cross-bar"></div>' +
  '<div class="cross-bar"></div>' +
  '</div>' +
  '<span class="roll-over__text">' +
  text +
  '</span>' +
  '</div>';
  return new_rollover;
}

$(document).ready(function(){
  $('.custom-tooltip')
  .tooltip()
  .each(function() {
    $(this).hover(function(){
      var aria = $(this).attr('aria-describedby');
      $('#' + aria).find('.arrow').css({
        "display": "none"
      });
      $('#' + aria).find('.tooltip-inner').css({
        "background": "#354253",
        "color" : "white",
        "padding": "10px 20px",
        "margin-bottom": "0",
        "border-radius": "0",
        "font-weight" : "400",
        "font-family" : "Roboto Condensed",
        "font-size" : "14px",
      });
    });
  });
});