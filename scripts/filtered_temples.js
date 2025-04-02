/*ghgj
kjghkj*/


const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
document.querySelector('.last-modified').textContent = `Last Access: ${formattedDate}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

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
	{
		templeName: "Barranquilla Colombia",
		location: "Barranquilla, Colombia",
		dedicated: "2018, December, 9",
		area: 25349,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1850.jpg"
	},
	{
		templeName: "Copenhagen Denmark ",
		location: "Copenhagen, Denmark",
		dedicated: "2004, May, 23",
		area: 25000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
	},
	{
		templeName: "Seoul Korea",
		location: "Seoul, Korea",
		dedicated: "1985, December, 14",
		area: 28057,
		imageUrl:
		    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
	},
	{
		templeName: "Bangkok Thailand",
		location: "Bangkok, Thailand",
		dedicated: "2023, Octubre, 22",
		area: 48525,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
	},
	{
		templeName: "Montreal Quebec ",
		location: "Quebec, Canada ",
		dedicated: "2000, June, 4",
		area: 28057,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
	},
]

function displayTemples(filterFunction = null) {
	const container = document.getElementById("temples-container");
	container.innerHTML = "";
  
	const filteredTemples = filterFunction ? temples.filter(filterFunction) : temples;
	console.log(`Filtered temples:`, filteredTemples); // Debugging log
  
	filteredTemples.forEach((temple) => {
	  // Create a card div
	  const card = document.createElement("div");
	  card.classList.add("temple-card");
  
	  // Add image
	  const img = document.createElement("img");
	  img.src = temple.imageUrl;
	  img.alt = temple.templeName;
	  img.loading = "lazy";
	  card.appendChild(img);
  
	  // Add temple name
	  const name = document.createElement("h2");
	  name.textContent = temple.templeName;
	  card.appendChild(name);
  
	  // Add location
	  const location = document.createElement("p");
	  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
	  card.appendChild(location);
  
	  // Add dedication date
	  const dedicated = document.createElement("p");
	  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
	  card.appendChild(dedicated);
  
	  // Add size
	  const size = document.createElement("p");
	  size.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
	  card.appendChild(size);
  
	  // Append the card to the container
	  container.appendChild(card);
	});
  }
  

  function handleMenuClick(event) {
	console.log(`Menu clicked: ${event.target.textContent}`); // Debugging log
	const filterType = event.target.textContent;
  
	switch (filterType) {
	  case "Old":
		displayTemples((temple) => new Date(temple.dedicated).getFullYear() < 1900);
		break;
  
	  case "New":
		displayTemples((temple) => new Date(temple.dedicated).getFullYear() > 2000);
		break;
  
	  case "Large":
		displayTemples((temple) => temple.area > 90000);
		break;
  
	  case "Small":
		displayTemples((temple) => temple.area < 10000);
		break;
  
	  case "Home":
	  default:
		displayTemples();
		break;
	}
  }
  
  // Attach event listeners to navigation menu items
  document.querySelectorAll(".navigation ul li a").forEach((menuItem) => {
	menuItem.addEventListener("click", handleMenuClick);
  });
  

  displayTemples();