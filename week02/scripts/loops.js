// loops.js
myInfo = {
    name: "Silvia Ferran",
    photo: "images/photo.webp",
    favoriteFoods: ["Arepas", "Steak", "Chicken", "Vegetables", "Yuca"],
    hobbies: ["Reading", "Crafting", "Disney"],
    placesLived: [
      {
        place: "Orlando, FL",
        length: "3 years",
      },
      {
        place: "Saratoga Spring, UT",
        length: "4 years",
      },
      {
        place: "Florence, SC",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];

  let favoriteFood5 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[4];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);
  document.querySelector("#favorite-foods").appendChild(favoriteFood5);


  // with .forEach
  const foodsElement =document.querySelector ('#favotite-foods');
  function createandAppendFoodItems(food){
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
  }
  myInfo.favoriteFood.forEach(createandAppendFoodItems);


  // with .map
  const foodsElement1 = document.querySelector('#favorite-foods');
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  // this function could also be written this way using a template literal:
  function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
  }
  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  // we need to flatten the array of strings into one big string. .join does this.
  foodsElement1.innerHTML = foodListElements.join('');

  // The map example could be simplified as below:
  const foodsElement1 = document.querySelector("#favorite-foods");
  const foodListElements1 = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
  // we need to flatten the array of strings into one big string. .join does this.
  foodsElement.innerHTML = foodListElements1.join("");

  // OR we could in fact simplify this down to one line!
  document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join("");
