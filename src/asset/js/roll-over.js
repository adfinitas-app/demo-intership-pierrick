let width = window.innerWidth;
let rollover = document.getElementsByClassName('rollover');

for (i = 0 ; i < rollover.length ; i++) {
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

  for (i = 0 ; i < rollover_pop.length ; i++) {
    rollover_pop[i].addEventListener('mouseout', function() {
      this.remove();
    });
  }
}

function rollover_cross() {
  let cross = document.getElementsByClassName('roll-over__cross');

  for (i = 0 ; i < cross.length ; i++) {
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