//  arrays.js
const steps = ["one", "two", "three"];

const listTemplate = (step) => {
  return `<li>${step}</li>`
}
document.querySelector("#myList").innerHTML = steps.map(listTemplate).join("");

const grades = ['A', 'B', 'A']
const gradetoGpa = (grade) => {
    const conversion = {
        'A': 4,
        'B': 3,
        'C': 2,
        'D': 1,
        'F': 0
    };
    return conversion[grade] || 0;
};

const gpaPoints = grades.map(gradetoGpa);
console.log(" GPA Points Array:", gpaPoints);

const totalGpa = gpaPoints.reduce((sum, gpa) => sum +gpa,0);
const averageGpa = totalGpa/gpaPoints.length;
console.log("Overall GPA:", averageGpa.toFixed(2));

document.querySelector("#gpaList").innerHTML = `
<li> GPA Points: ${gpaPoints.join(", ")}</li>
<li> GPA Overall GPA: ${averageGpa.toFixed(2)}</li>
`;

const fruits = ['Watermelon', 'Peach', 'apple', 'tomato', 'grape'];
const listResult = fruits.filter(word => word.length < 6);
console.log (listResult)

document.querySelector("#listResult").innerHTML = listResult.map(fruit => `<li>${fruit}</li>`).join("");

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber)

if (index !== -1) {
    console.log(`Lucky Number ${luckyNumber} is found at index ${index}.`);
} else {
    console.log(`Lucky Number ${luckyNumber} is not in the array. `);
}

document.querySelector("#luckyResult").innerHTML = 
    index !== -1
    ? `Lucky number ${luckyNumber} is found at index ${index}. `
    : `Lucky number ${luckyNumber} is not in the array. `