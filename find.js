const students=[
    {name:'lokman',age:23},
    {name:'imran',age:13},
    {name:'ahaduzzaman',age:53},
    {name:'kman',age:33},
    {name:'human',age:32},
    {name:'jman',age:39}
];

const finding=students.find(std => std.age>35);
console.log(finding)