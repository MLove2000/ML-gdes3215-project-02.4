/* EMAIL FORM HANDLING */

$('form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

var e = document.querySelectorAll('.slanted-container *');
e.forEach(element => wrapWords(element));
function wrapWords(e) {
  e.innerHTML = e.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="word">$2</span>');
}


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}


$('h4').click(function(){
  if( $(this).hasClass('curr') ){
    // if current selection is open, close accordion
    $(this).next().removeClass('more');
    // and then remove current status
    $(this).removeClass('curr');
  } else {
    // if current selection is not open
    // remove current class from all headings
    $('h4').removeClass('curr');
    // add class to the current selection
    $(this).addClass('curr');
    // remove class from all accordion content
    $('.accordion-content').removeClass('more');
    // add class to the current accordion content
    $(this).next().addClass('more');
  }
})


