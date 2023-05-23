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
  
  // Function to handle the page load event
  function handlePageLoad() {
    var elements = document.querySelectorAll('.animate-element');
    elements.forEach(function(element) {
      element.classList.add('animate');
    });
  }
  
  // Add the scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Add the load event listener
  window.addEventListener('load', handlePageLoad);
  
  // Refresh the page on load to trigger the animation
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };


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



  
    // Reset the input border color on input change
    $('.input-container input').on('input', function() {
      $(this).removeClass('error');
    });

    