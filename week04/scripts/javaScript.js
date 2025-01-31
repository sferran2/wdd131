const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  

person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."


// Dot Notation

person.age;
person.bio();


//Bracket Notation

person["age"];
person["name"]["first"];

const person = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32

  ///The this keyword typically refers to the current object the code is being executed in. 
  // In the context of an object method, this refers to the object that the method was called on.
  
  const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };

//  Introducing constructors

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

  const salva = createPerson("Salva");
  salva.introduceSelf();
  // "Hi! I'm Salva."
  
  const frankie = createPerson("Frankie");
  frankie.introduceSelf();
  // "Hi! I'm Frankie."
  