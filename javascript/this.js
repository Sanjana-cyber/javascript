// const obj={
//     name:"sanjana",
//     class:"btech",
//     english:90,
//     hindi:90,
//     punjabi:50, 
//     sst:70,
//     average(){
//         avg=(english+hindi+punjabi+sst)/4;

//     }

// }
// obj.average()//error
const obj={
    name:"sanjana",
    class:"btech",
    english:90,
    hindi:90,
    punjabi:50, 
    sst:70,
    average(){
        console.log(this)
       return  avg=(this.english+this.hindi+this.punjabi+this.sst)/4;

    }

}
s=obj.average()
console.log(s)//error

console.log(this)