const pElement = document.querySelector("#p-element");
const hardCodedValues = [1, 2,];

console.log("hardCodedValues[] : " + hardCodedValues);


function testUpdateHTML() {
  pElement.textContent="HTML output updated by calling testUpdateHTML()";
}

testUpdateHTML();

//Methods can also accept parameters and return values just like regular functions:
const object = {
  method: function(a, b) {
      return a + b;
  }
};

console.log("object.method(1, 2) : " + object.method(1, 2)); // prints  3 (passes values to function(a+b) and returns the result of a + b )

//pass values from hardCodedValues[] to method: function(a, b) in object2

const object2 = {
  method: function(a, b) {
      return a + b;
  }
};


