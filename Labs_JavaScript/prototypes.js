function Person(name){
    this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1.name);
console.log(person2.name);

person1.sayName();
person2.sayName();

Person.prototype.favourites = [];

person1.favourites.push("pizza");
console.log(person1.favourites);