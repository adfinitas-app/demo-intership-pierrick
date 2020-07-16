let graph_data = {
  "ifi": {
    "value": [
      [250, 750, 1000],
      [1000, 750, 5000],
      [2500, 7500, 10000]
    ],
    "percent": 75,
  },
  "ir": {
    "value": [
      [51, 99, 150],
      [170, 330, 500],
      [340, 660, 1000]
    ],
    "percent": 66,
  },
  "is": {
    "value": [
      [4000, 6000, 10000],
      [8000, 12000, 20000],
      [12000, 18000, 30000]
    ],
    "percent": 60,
  }
}

let allProgress = document.getElementsByClassName('progress-circle');
let input = document.getElementById('custom_donation_input');
let labelPrimary = document.getElementById('custom_label_primary');
let labelSecondary = document.getElementById('custom_label_secondary');

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function set_data_in_graph(data) {
  input.dataset['type'] = data;
  update_percent(data);
  for (i = 0 ; i < allProgress.length ; i++) {
    for (x = 0 ; x < 3 ; x++) {
      if (x < 2)
        allProgress[i].children[x].textContent = numberWithSpaces(graph_data[data]['value'][i][x]) + "€";
      else {
        if (i != 2)
          allProgress[i].children[x].lastElementChild.textContent = numberWithSpaces(graph_data[data]['value'][i][x]) + "€";
        else
          allProgress[i].children[x].lastElementChild.value = numberWithSpaces(graph_data[data]['value'][i][x]) + "€";
      }
    }
  }
}

function update_percent(data) {
  let percent = 100 - graph_data[data]['percent'];
  let new_percent = 565.48 - (565.48 * percent) / 100;
  for (i = 0 ; i < allProgress.length ; i++) {
    allProgress[i].children[3].children[0].children[1].style.strokeDashoffset = new_percent;
  }
}

input.addEventListener('input', function() {
  let value_rest = 0;
  let value_real = 0;
  let type = input.dataset['type'];

  if (Number.isInteger(Number(input.value))) {
    value_real = (input.value / 100) * graph_data[type]['percent'];
    value_rest = (input.value / 100) * (100 - graph_data[type]['percent']);

    labelPrimary.textContent = numberWithSpaces(Math.floor(value_rest)) + "€";
    labelSecondary.textContent = numberWithSpaces(Math.floor(value_real)) + "€";
  }
});