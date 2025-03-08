//######################################################################
//FOOTER CHE CAMBIA DATA ###############################################
//######################################################################

var date = new Date();
var year = date.getFullYear();
document.getElementById('copy').innerHTML = year;

//######################################################################
//BOTTONE TORNA SU #####################################################
//######################################################################

let mybutton = document.getElementById("TopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//######################################################################
//CAMBIO NOME TAB QUANDO NON SU ESSA ###################################
//######################################################################

window.onblur = function() {
  document.title = 'Mi manchi T_T';
}

window.onfocus = function() {
  document.title = 'MKEmii';
}

//######################################################################
//TYPEWRITER.JS ########################################################
//######################################################################

var quotes = document.getElementById('quotes');

var typewriter = new Typewriter(quotes, {
    strings: ['"hello"', '"ts pmo -dreamybull"', '"sono gay"'],
    autoStart: true,
    loop: true,
    delay: 150,
});

//######################################################################
//BOTTONI REDIRECT TO SECTION ##########################################
//######################################################################

//about me
document.getElementById('abtButton').addEventListener('click', function() {
   window.scrollTo({top: 0, behavior: 'smooth'});
});

//link
document.getElementById('linkButton').addEventListener('click', function() {
   document.getElementById('links').scrollIntoView({ behavior: 'smooth' });
});