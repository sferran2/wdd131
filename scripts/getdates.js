const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
const lastModified = document.lastModified;
document.querySelector('.last-modified').textContent = `Last Modification: ${lastModified}`;
