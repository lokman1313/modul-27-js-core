// global scope
let name = "Lokman"; // global scope

function greet() {
  console.log(name); // Lokman
}

greet();
console.log(name); // Lokman


// function scope
function test() {
  let age = 25;
  console.log(age); // 25
}

test();
console.log(age); // ❌ Error


//block scope
{
  let city = "Rangpur";
  console.log(city); // Rangpur
}

console.log(city); // ❌ Error