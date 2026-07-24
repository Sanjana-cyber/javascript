//passing a function as an argument
let fun=function()
{
    console.log("heello my name is sanjana");
}
function parameter(fun ){
    fun();

}
parameter(fun);
//returning a function inside a higher order function
let adult=10;
// adult=20;
adult=18;
let voting=function(){
    console.log("you are eligible to vote");
    console.log(`voting card number is${adult+1}`);
}
function not_voting(){
    console.log("you are not eligible to vote");
   
}
function returning(adult)
{
    if (adult>18)
    {
        return voting;
    }
    else if(adult<18) {
         return not_voting;
    }
    else
    {return function()
        {
            console.log("preceeding");
        }

    }
}
returning(adult);//not working  because it is running function not value
let s=returning(adult);//but working
s();