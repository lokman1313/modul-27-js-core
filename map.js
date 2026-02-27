
// normaly amra ei system ei kaj korbo 

 const numbers=[1,2,3,4,5];
//  const number=[];
// for(let num of numbers){
//     number.push(num*2);
// }



// but er eser vertion holo
// const numberIt= num => num*2;
// const number=numbers.map(numberIt); 

const number=numbers.map(num => num*3);
const sqear=numbers.map(num => num*num);
console.log(number);
console.log(sqear);

const names=['lokman','hossen','azad','joy','papu']
const fristLetter=names.map(nam => nam[0])
console.log(fristLetter);


const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);