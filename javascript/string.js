let string1="    sanjana   ";
//string methods:imutable 
//remove white spaces
 let trim=string1.trim()
//convert upper case
let upper=string1.toUpperCase();
//convert lower case
let lower=string1.toLowerCase();
//give index of given string inside the main string
let index1=string1.indexOf("a")
let index2=string1.indexOf("an")
//string cchaining :apply two or more methods together
let chaining=string1.toLowerCase().trim();
//replace older value with newer value 
let replace=string1.replace("s","j");
//repeat the given string for given number of time
let repeat=string1.repeat(2);
//slice:
let slice=string1.slice(1,7);
let slice2=string1.slice(5);
let slic_negative=string1.slice(-7)
//all printing
console.log(string1);
console.log(trim);
console.log(upper);
console.log(lower);
console.log(index1);
console.log(index2);
console.log(chaining);
console.log(replace);
console.log(repeat);


console.log(slice);
console.log(slice2);
console.log(slic_negative);