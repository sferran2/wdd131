const productArray = [
    { name: "Guard Smart Security System" },
    { name: "Solar Pro Panel Kit" },
    { name: "Theater 360 Sound System" },
    { name: "Cool HVAC System" },
    { name: "Built-in Oven & Dishwasher" },
    { name: "Pure Water Filtration System" },
    { name: "Charge EV Station" },
    { name: "Lock Smart Access System" }
];

const selectElement = document.getElementById("product-category");

productArray.forEach(product => {
    let option = document.createElement("option");
    option.value = product.name;  
    option.textContent = product.name; 
    selectElement.appendChild(option);
});

const textarea = document.getElementById("written-review");

textarea.addEventListener("input", function () {
  this.style.height = "auto";  // Reset height to recalculate
  this.style.height = this.scrollHeight + "px";  // Set height to fit content
});

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