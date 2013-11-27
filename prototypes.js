Function.prototype.inherits = function(parentClass){
  function Surrogate() {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
}

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this,name);
  this.breed = breed;
}

Dog.inherits(Animal);

var d = new Dog("bob","collie");
console.log(d.name);