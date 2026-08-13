// let fruits=["apple","mango","banana","litchi"];
// let color=["red","yellow","yellow","red"]
// let n=fruits.length;
// for (i =0;i<n;i++){
//     console.log("color of " ,fruits[i],"is:",color[i])
// }
// module.exports ;

// This is available for import
export let fruits = ["apple", "mango", "banana", "litchi"];

// This is private (not exported)
let color = ["red", "yellow", "yellow", "red"];

// Put the loop inside a function so it doesn't run automatically
export function printFruitColors() {
    let n = fruits.length;
    for (let i = 0; i < n; i++) {
        console.log("color of ", fruits[i], "is:", color[i]);
    }
}
