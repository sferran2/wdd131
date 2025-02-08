document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!");

    const products = [
        {
            id: "fc-1888",
            name: "Flux Capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "Power Laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "Time Circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "Low Voltage Reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "Warp Equalizer",
            averagerating: 5.0
        }
    ];

    const selectElement = document.getElementById("product-category");

    if (selectElement) {
        // Loop through each product and create an <option> element
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id; // Store product ID as the value
            option.textContent = product.name; // Display product name
            selectElement.appendChild(option);
        });

        console.log("Product options populated successfully!");
    } else {
        console.warn("Warning: #product-category element is missing in this HTML file.");
    }
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



