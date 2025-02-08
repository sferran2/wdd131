const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
document.querySelector('.last-modified').textContent = `Last Access: ${formattedDate}`;

if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", "0");
}

let reviewCount = parseInt(localStorage.getItem("reviewCount"));
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("review-counter").textContent = reviewCount;

