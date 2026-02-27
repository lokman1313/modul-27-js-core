let numbers=[1,2,3,4,5,6,7,8,9];

const oddNumber=numbers.filter(num => num%2===0);
console.log(oddNumber)



const students=[
    {name:'lokman',age:23},
    {name:'imran',age:13},
    {name:'ahaduzzaman',age:53},
    {name:'kman',age:33}
];
const student=students.filter(std => std.age>30);
console.log(student)