
function pageCursor(){

  var page1Content = document.querySelector(".page1-content");
  var cursor = document.querySelector("#cursor");
  
  page1Content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY
    });
   
  });
  
  // Change cursor color on hover and hide cursor text
  var hoverElements = document.querySelectorAll("nav a, .btn button, .headlines p");
  
  hoverElements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
      cursor.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Change to your desired color
     gsap.to(cursor,{
      scale:1,
      opacity:1
     })
    });
    
    element.addEventListener("mouseleave", function() {
      cursor.style.backgroundColor = "rgba(130, 98, 76, 0.5)"; // Revert back to original color
      gsap.to(cursor,{
          scale:0,
          opacity:0
         })
    });
  });
  
  
  
  
}

pageCursor()



function pageLoader() {
  document.body.classList.add('no-scroll'); // Add no-scroll class to body

  var tl = gsap.timeline();
  tl.from("#loader1 h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2
  })
  .to("#loader1 h3", {
      opacity: 0,
      x: -10,
      duration: 1.5,
      stagger: 0.2
  })
  .to("#loader1", {
   
      onComplete: function() {
          document.getElementById('loader1').style.display = 'none';
          document.getElementById('loader2').style.display = 'flex';
      }
  })
  .from("#loader2 h3", {
      x: 40,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1
  })
  .to("#loader2 h3", {
      opacity: 0,
      x: -10,
      duration: 1.5,
      stagger: 0.1
  })
  .to("#loader2", {
      opacity: 0,
      duration: 0.5,
      onComplete: function() {
          document.getElementById('loader2').style.display = 'none';
          document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
      }
  });
}

pageLoader();

// JavaScript code to show/hide the banner image based on the visibility of page 8

// Function to update the visibility of the banner
function updateBannerVisibility() {
  const banner = document.getElementById('banner');
  const checkboxP8 = document.getElementById('c8');

  // Check if the checkbox for page 8 is checked
  if (checkboxP8.checked) {
      banner.style.display = 'block'; // Show the banner
  } else {
      banner.style.display = 'none'; // Hide the banner
  }
}

// Event listener for the checkbox changes
document.getElementById('c8').addEventListener('change', updateBannerVisibility);

// Call the function initially to set the correct visibility
updateBannerVisibility();
