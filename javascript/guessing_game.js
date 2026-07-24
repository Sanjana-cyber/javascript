let max= prompt("give me  a range to generate random number");
let random=Math.floor(Math.random()*max) +1;
let guess=prompt("ok now gues the number");
while (true)
{
    if (guess ==random)
    {
        console.log("yeah number is correct...");
        break;
    }
    else if(guess=="quit")
    {
        console.log("Quit");
        break;
    }
    else if (guess>random)
    {
        console.log("too much big number");
        guess =prompt("again guess");

    }
     else 
    {
        console.log("too much smallnumber");
        guess =prompt("again guess");

    }
    
}
