let fullCitation = document.getElementsByClassName("citation__collapse")[0]
let buttons = document.getElementsByClassName('button')
let btnView

for (var btn of buttons) {
  if (btn.getAttribute('href') == "#citation-collapse") {
    btn.addEventListener('click', function() {
      btnView = this;
      $(this).hide()
      $(fullCitation).slideDown(1000)
    });
  }
  if (btn.getAttribute('href') == "#citation-hide") {
    btn.addEventListener('click', function() {
      $(fullCitation).slideUp(500)
      $(btnView).show()
    });
  }
}