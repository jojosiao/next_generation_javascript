// Easily extract array elements or object properties and store them in variables.
// [a,b] = ['hello','world']
// console.log(a,b)  hello world
const numbers = [1,2]
[num1,num2] = numbers;
console.log(num1,num2);

const numbers1 = [1,2,3];
[num1, , num3] = numbers1;
console.log(num1,num3);
