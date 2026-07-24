//destructuring of arrayy

let array=[1,2,3,4,5,6];
let[first,second,third]=array;
console.log(first,second,third);
//destructuring of object
let object={
    name:"sanjana",
    marks:8,
    section:"a"
}
let{
    name:username,marks:score,section:sec
}=object;
console.log(username,score,sec);