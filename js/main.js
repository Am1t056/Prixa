


document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player');

    player.on('ended', () => {
      player.restart();
  });
});


/*================SCROLL REVEAL======================= */
ScrollReveal({
  
    distance: '80px',
    duration: 2000,
    delay:200


    });
    ScrollReveal().reveal('.hero-content', { origin: 'top' });
    ScrollReveal().reveal('.left', { origin: 'left' });
    ScrollReveal().reveal('.mid,.copyright', { origin: 'top' });
    ScrollReveal().reveal('.right,.right-hand', { origin: 'right' });
    ScrollReveal().reveal('.down', { origin: 'bottom' });
    ScrollReveal().reveal('.heading', { origin: 'right' });
    ScrollReveal().reveal('.workflow,.footer-1', { origin: 'left' });
    ScrollReveal().reveal('.video', { origin: 'left' });
    ScrollReveal().reveal('.video-list,.footer-2', { origin: 'right' });



// scroll sections active link
document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  var navLinks = document.querySelectorAll('.main-menu li a');

  // Add click event listeners to each link
  navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
          // Remove the 'active' class from all links
          navLinks.forEach(function (navLink) {
              navLink.classList.remove('active');
          });

          // Add the 'active' class to the clicked link
          event.target.classList.add('active');
      });
  });
});



/*================SIDEBAR======================= */
function abc(){

    var sidebar=document.querySelector('.sidebar');
     

    if(sidebar.style.display === 'none'){
     
      sidebar.style.display = 'block';
      
    }else{
      sidebar.style.display = 'none';
      console.log('running');
    }
}



/*================SIDEBAR CLOSE======================= */
function sidebarClose() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}



//ANIMATED cOUNTER NUMBER
// Function to animate the number counter
function animateCounter(element, target) {
  let increment;
  const delay = target <= 10 ? 200 : 20; // Adjust delay based on target value
  
  if (target <= 10) {
    increment = 1; // Increment by 1 for lower numbers
  } else {
    increment = Math.ceil(target / 100); // Increment by percentage for higher numbers
  }
  
  let currentCount = 0;

  const updateCounter = () => {
    if (currentCount < target) {
      element.textContent = currentCount;
      currentCount += increment;
      setTimeout(updateCounter, delay); // Adjust speed of animation (lower values = faster)
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const clientsCounter = document.getElementById('clientsCounter');
  const servicesCounter = document.getElementById('servicesCounter');
  const experienceCounter = document.getElementById('experienceCounter');

  if (clientsCounter, servicesCounter, experienceCounter){
    if (isInViewport(clientsCounter)) {
      animateCounter(clientsCounter, 73);
      window.removeEventListener('scroll', handleScroll);
    }

    if (isInViewport(servicesCounter)) {
      animateCounter(servicesCounter, 6);
      window.removeEventListener('scroll', handleScroll);
    }

    if (isInViewport(experienceCounter)) {
      animateCounter(experienceCounter, 5);
      window.removeEventListener('scroll', handleScroll);
    }
  }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();



/*================DROPDOWN======================= */

window.addEventListener('DOMContentLoaded', () => {
  var dropdownTogglers = document.querySelectorAll(".menu__link");
  dropdownTogglers.forEach(dropdownLink => {
      dropdownLink.addEventListener('click', (e) => {
          var dropdownContent = dropdownLink.parentNode.querySelector('.dropdown-content');

          if (dropdownContent) {
              e.preventDefault();

              if (dropdownContent.classList.contains('active')) {
                  // Dropdown content exists and is active, remove active class from it
                  dropdownContent.classList.remove('active');
              } else {
                  // Dropdown content exists but is not active, remove active class from all dropdowns
                  document.querySelectorAll('.dropdown-content.active').forEach(dropdown => {
                      dropdown.classList.remove('active');
                  });
                  // Add active class to clicked dropdown content
                  dropdownContent.classList.add('active');
              }
          }
      });
  });
   // Close dropdown when clicking outside
   window.addEventListener('click', (e) => {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target) && !e.target.classList.contains('menu__link')) {
            dropdown.classList.remove('active');
        }
    });
}); 
});







