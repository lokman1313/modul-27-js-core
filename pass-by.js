// function multi(a, b) {
//   a = a - 1;
//   b = b - 1;
//   return a * b;
// }

// let x = 5;
// let y = 10;
// const result = multi(x, y);
// console.log(result);


function arrayPassByREfarence(arr1,arr2){
    arr1[0]=100;
    arr2[0]=100;
    const first=arr1[0];
    const second=arr2[0];
    return first+second;
}
let num=[2,3,4,5,6];
let nums=[2,3,4,5,6];
console.log('befor',num,nums);

arrayPassByREfarence(num,nums)
console.log('befor',num,nums);