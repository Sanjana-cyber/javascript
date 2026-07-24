const student={
    name :"sanjana",
    roll:1,
    location:"ludhiana"
};
console.log(student["location"]);
    //error
// console.log(student[location]);
console.log(student.location)
//internally convert all the key to string
const student2={
   1 :"sanjana",
  true:1,
    undefined:"ludhiana"
};
//work because datatyoe is not string it is undefined same true and one also work but internally 
// js is treated is as string....
console.log(student2[undefined]);
//nested object(object of object)
const obj={
    name:{
        firstname:"sanjana",
        lastname:"pandey"
    }
    ,class:{
        standard:"btech",
        section:"a"
    }
};
console.log(obj.name);
console.log(obj.name.firstname);

//array of object
let arr=[
    {firstname:"sanjana",
        lastname:"pandey"
    },{ standard:"btech",
        section:"a"},{standard:"btech",
        section:"a"}
];

console.log(arr[0]);
console.log(arr[0].firstname);

console.log(arr[0]["firstname"]);
//math object 
//round off nearest small or equal integer
let f=Math.floor(1.33);
console.log(f);
//round off nearestlarge  or equal integer
let l=Math.ceil(1.33);
console.log(l);


//generate number from 1 -100
let s=Math.floor(Math.random()*100)+1;
console.log(s);

let j=Math.floor(Math.random()*5)+1;
console.log(j);