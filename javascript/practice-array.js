//generate tic tac toe problem
let arr=[["x","  ",0],[" ", "x"," "],[0," ","x"]];
console.log(arr);

for(let i=0;i<=15;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}
let favourite_movie="rab ne bana di jodi";
let guess=prompt("guess my favourite movie");
while((guess!=favourite_movie)&&(guess!=quit))
{
    console.log("wrong guess");
    guess=prompt("guess movie again or quit");
}