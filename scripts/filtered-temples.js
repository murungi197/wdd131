const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  
  {
    templeName:"Bogotá Colombia Temple",
    location: "Bogotá, Colombia",
    dedicated: "2013, April, 7",
    area: 10000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/800x500/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
  },

  {
    templeName:"Vancouver British Columbia Temple",
    location: "Langley, British Columbia, Canada",
    dedicated: "2010, August, 21",
    area: 17000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-61618.jpg"    
  },

  {
    templeName:"Abidjan Ivory Coast Temple",
    location: "Abidjan, Ivory Coast",
    dedicated: "2015, August, 23",
    area: 8500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58324.jpg"
  }
];



const templesContainer = document.querySelector("#temples");

function displayTemples(templeList) {
  templesContainer.innerHTML = "";

  templeList.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    templesContainer.appendChild(figure);
  });
}

// Call the function
displayTemples(temples);
// Navigation filtering
const navLinks = document.querySelectorAll("#nav-menu a");

function getYear(dedicatedStr) {
  const parts = String(dedicatedStr).split(",");
  const year = parseInt(parts[0], 10);
  return Number.isFinite(year) ? year : NaN;
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const key = link.textContent.trim().toLowerCase();
    let filtered = temples;

    if (key === "old") {
      filtered = temples.filter(t => getYear(t.dedicated) < 1900);
    } else if (key === "new") {
      filtered = temples.filter(t => getYear(t.dedicated) > 2000);
    } else if (key === "large") {
      filtered = temples.filter(t => Number(t.area) > 90000);
    } else if (key === "small") {
      filtered = temples.filter(t => Number(t.area) < 10000);
    } else if (key === "home") {
      filtered = temples;
    }

    displayTemples(filtered);

    // Close nav on mobile after selection
    navMenu.classList.remove("show");
    menuButton.textContent = "☰";
  });
});

