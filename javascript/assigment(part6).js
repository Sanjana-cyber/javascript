// let arr=[1,2,34,56,78];
// let number=40;
// function greater(arr,number)
// {
//     for(elements of arr)
//     {
//         if(elements>number)
//         {
//             return elements;
//         }
//     }
// }
// let s=greater(arr,number);
// console.log(s);
// let arr=[1,2,34,56,78];
// let number=40;

// function greater(arr,number)
// {
//     let n=arr.length;
//     for(i=0;i<n;i++)
//     {
//         if(arr[i]>number)
//         {
//             return arr[i];
//         }
//     }
// }
// let s=greater(arr,number);
// console.log(s);
// let arr=[1,2,34,56,78];
// let number=40;

// function greater(arr,number)
// {
//     let n=arr.length;
//     for(i=0;i<n;i++)
//     {
//         if(arr[i]>number)
//         {
//            console.log( arr[i]);
//         }
//     }
// }
// greater(arr,number);

//second question
// let str="abcdabacdefggh";

// let n=str.length;
// function string(str)
// {
//     let ans="";
// for(i=0;i<n;i++)
// {
//     if(ans.indexOf(str[i])==-1)
//     {
//         ans=ans+ str[i];
//     }
// }
// return ans;}
// let s=string(str);
// console.log(s);
//

//third
// let country=["Australia","Germany","UnitedStatesofAmerica"];

// function longest_name(a)
// {let max=0;
//     let n=a.length
// for(i=0;i<n;i++)
// {
//     count=a[i].length;
//     if(count>max)
//     {
//         output=a[i];
//     }
// }
// return output;
// }
// let s=longest_name(country);
// console.log(s);
//

//fourth
let string="sAnjana";
function vowels(s)
{
    let n=s.length;
    let count=0;
    for(i=0;i<n;i++)
    {
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u")
        {
            count++;
        }
        {

        }
    }
    return count;
}
 let v=vowels(string);
 console.log(v);
 
 //