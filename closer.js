// function outerFunction(){
//     function innerFunction(){
//         console.log('this is the inner function')
//     }
//     return innerFunction;
// }
// const output =outerFunction();
// return output();
// console.log(output);





function count(name){
    let count=0;
    function add(){
        count = count+1;
        console.log('value of count',name,count)
    }
    return add;
}
// const result = count();
// result();
// result();
// result();
// result();
// result();
const rehimCoun=count('Rahim');
rehimCoun();
rehimCoun();
rehimCoun();
rehimCoun();
const fehimCoun=count('Fahim');
fehimCoun();
fehimCoun();
fehimCoun();
rehimCoun();
rehimCoun();ps