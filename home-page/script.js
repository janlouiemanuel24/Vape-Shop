// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  var elements = document.querySelectorAll('.animate-element');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}


// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', function() {
  var elements = document.querySelectorAll('.bounce-element');
  elements.forEach(function(element) {
    element.classList.add('animate');
  });
});

// NAV TOGGLE
$(document).ready(function() {
  $('#navbarToggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
    $('.navbar-toggler-icon').toggleClass('collapsed');
  });
});

$(document).ready(function() {
  $('#navbarToggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
  });
});


// auto scroll





// product scroll
document.addEventListener("DOMContentLoaded", function() {
  var productLink = document.getElementById("productLink");
  productLink.addEventListener("click", scrollToAbout);

  function scrollToAbout(event) {
      event.preventDefault(); // Prevent default hyperlink behavior
      var productSection = document.getElementById("product");
      productSection.scrollIntoView({ behavior: 'smooth' });
  }
});


// services scroll



function handleScroll() {
  var elements = document.querySelectorAll('.animate-element');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Function to handle the page load event
function handlePageLoad() {
  var elements = document.querySelectorAll('.animate-element');
  elements.forEach(function(element) {
    element.classList.add('animate');
  });
}

  // AUTO SCROLL(CONTACT) BUTTON

document.querySelector('a[href="#contact-bottom"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});





// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
