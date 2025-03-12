function navigate(stream) {
  window.location.href = stream + ".html"; // Redirect to respective pages
}

function predictCollege() {
  alert("College Prediction Feature Coming Soon!");
}
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
let isMenuOpen = false;

menuButton.addEventListener("click", () => {
    if (isMenuOpen) {
        menu.style.right = "-250px"; // Hide menu
    } else {
        menu.style.right = "20px"; // Show menu inside screen
    }
    isMenuOpen = !isMenuOpen;
});
function toggleMenu() {
  let menu = document.getElementById("dropdown-menu");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuButton.addEventListener("click", function () {
      // Toggle Menu Visibility
      if (dropdownMenu.style.display === "block") {
          dropdownMenu.style.display = "none";
      } else {
          dropdownMenu.style.display = "block";
      }
  });
  window.onload = function () {
    console.log("Menu Button Loaded");
    document.querySelector(".menu-button").style.right = "20px"; // Ensure it's visible
};

  // Close menu if clicked outside
  document.addEventListener("click", function (event) {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = "none";
      }
  });
});
