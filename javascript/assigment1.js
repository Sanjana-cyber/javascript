let num=100;
if(num%10==0)
{
    console.log("good");
}
else
{
    console.log("bad");
}
let name=prompt("enter ur name");
let age=prompt("enter ur age");
alert( `${name} is ${age} years old`);
let quarter=Number(prompt("tell us the quarter"));
switch(quarter)
{
    case 1:
        console.log("january,february ,march");
        break;
        case 2:
        console.log("april,may,june");
        break;
        case 3:
        console.log("july ,august,september");
        break;
       default:
        console.log("october,november,december");
        break;
}
let string=prompt("tell us the string");
if((string[0]=="a"||string[0]=="A")&&string.length==5){
    console.log("golden")
}
else {
    console.log("not golden");
}





//must doo***********************
let string1=prompt("tell us the string1");
let string2=prompt("tell us the string2");
if(string1[string1.length-1]==string2[string2.length-1])
{
    console.log("yes");
}
else{
    console.log("no");
}


//better way
// if a number is divided by 10 then last number always  remainder
let num1=Number(prompt("tell first number"));
let num2=Number(prompt("tell second number"));
if(num1%10==num2%10)
{
    console.log("yes");
}
else{
    console.log("false");
}
