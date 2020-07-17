let fullCitation = document.getElementsByClassName("citation__collapse")[0];
let buttons = document.getElementsByClassName('button');
let btnView;

for (btn of buttons) {
  if (btn.getAttribute('href') == "#citation-collapse") {
    btn.addEventListener('click', function() {
      btnView = this;
      this.style.display = 'none';
      fullCitation.style.display = 'block';
    });
  }
  if (btn.getAttribute('href') == "#citation-hide") {
    btn.addEventListener('click', function() {
      fullCitation.style.display = 'none';
      btnView.style.display = 'flex'
    });
  }
}