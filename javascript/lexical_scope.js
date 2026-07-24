function outer(){
    let x=10;
    let y=20;
    function inner()
    {
        console.log(x+y);
    }
    inner();
}
outer();
//we have not  called the inner function inside the outer function so nothing is get printed

function outer2(){
    let x=10;
    let y=20;
    function inner()
    {
        console.log(x+y);
    }
  
}
outer2();