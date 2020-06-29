const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};

person["eyes"] = "hazel";

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    alert(
      this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  };
  this.greeting = function () {
    alert("Hi! I'm " + this.name.first + ".");
  };
}

let person1 = new Person("Rodrigo", "Fernandes", 22, "male", [
  "football",
  "coding",
]);
let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
  "playing drums",
  "mountain climbing",
]);

function Citizen(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Citizen.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};

function Teacher(first, last, age, gender, interests, subject) {
  Citizen.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Citizen.prototype);

Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false,
  writable: true,
});

Teacher.prototype.greeting = function () {
  let prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      "."
  );
};

let teacher1 = new Teacher(
  "Rodrigo",
  "Fernandes",
  22,
  "male",
  ["football", "coding"],
  "math"
);

class Someone {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

class Professor extends Someone {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    this.subject = subject;
    this.grade = grade;
  }
}

let professor1 = new Professor(
  "Rodrigo",
  "Fernandes",
  22,
  "male",
  ["football", "coding"],
  "math",
  5
);

const header = document.querySelector("header");
const section = document.querySelector("section");

let requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${jsonObj["homeTown"]} // Formed: ${jsonObj["formed"]}`;
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = `Secret identity ${heroes[i].secretIdentity}`;
    myPara2.textContent = `Age: ${heroes[i].age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
