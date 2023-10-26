const pElement = document.querySelector("#p-element");
const league = [1, 2, 0];

function testUpdateHTML() {
  pElement.textContent="HTML output updated by calling testUpdateHTML()";
}

testUpdateHTML();

//Methods can also accept parameters and return values just like regular functions:
const object = {
  pct: function(a, b) {
      return a + b;
  }
};

console.log("object.pct(1, 2) : " + object.pct(1, 2)); // prints  3 (passes values to function(a+b) and returns the result of a + b )

//pass values from league[] to pct: function(a, b) in object2

const object2 = {
  pct: function(a, b) {
      return a + b;
  }
};

league[2] = (object2.pct(league[0],league[1]));

console.log("league[] : " + league);