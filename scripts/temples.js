const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
