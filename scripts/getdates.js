const yearSpan = document.getElementById("currentyear");
const lastModifiedPara = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
