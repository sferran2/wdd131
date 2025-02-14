// MOTIVATIONAL
document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { text: "Believe in yourself and all that you are!", image: "images/1.jpg"},
        { text: "Success is the sum of small efforts repeated daily.", image: "images/2.jpg"},
        { text: "You are stronger than you think!", image: "images/3.jpg"},
        { text: "Keep pushing forward, one step at a time.", image: "images/4.jpg"},
        { text: "Your only limit is your mind!", image: "images/5.jpg"},
        { text: "The best way to predict the future is to create it.", image: "images/6.jpg"},
        { text: "Stay positive, work hard, and make it happen.", image: "images/7.jpg"},
        { text: "Dream big, start small, but most importantly, start!", image: "images/8.jpg"},
        { text: "Don't stop until you're proud!", image: "images/9.jpg"},
        { text: "The secret of getting ahead is getting started.", image: "images/10.jpg"}
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function updateQuote() {
        const quoteText = document.getElementById("quote-text");
        const quoteImage = document.getElementById("quote-image");

        if (quoteText && quoteImage) {
            const randomQuote = getRandomQuote();

            quoteText.style.opacity = "0";
            quoteImage.style.opacity = "0";

            const img = new Image();
            img.src = randomQuote.image;
            img.onload = function () {
                setTimeout(() => {
                    quoteText.textContent = randomQuote.text;
                    quoteText.style.opacity = "1"; 

                    quoteImage.src = randomQuote.image;
                    quoteImage.style.display = "block"; 
                    quoteImage.style.opacity = "1"; 
                }, 300);
            };

            img.onerror = function () {
                console.error(`Image not found: ${randomQuote.image}`);
                quoteImage.style.display = "none"; 
            };
        }
    }

    updateQuote();
});





