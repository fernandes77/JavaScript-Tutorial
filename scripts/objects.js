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
