// // Hoisting
// // console.log("Hello this JavaScript");
// // var
// // var newText = "Hello this JavaScript"
// // console.log(newText);

// // // console.log(a);
// // var a=10
// // var a=60
// // a=70
// // console.log(a);

// // // console.log(a);

// // // let

// // let b=20
// // b=60
// // console.log(b);

// // // const
// // const c=44
// // // c=88
// // console.log(c);

// // // block scope 
// // // global scope 

// // {
// //     const d = 80
// // }
// // console.log(d);

// // datatypes
// // premitive
//     let a = 20.2
//     let userName = "xyz"
//     let todayClassAvalible = true
//     console.log(typeof(todayClassAvalible));
    
//     console.log(typeof(userName));
//     let b = undefined
//     console.log(typeof(b));
//     let c =null
//     console.log(typeof(c));
    
// // non premitive
//     // array
//     let arr = [20,"xyz",true,undefined] //index = 0
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr[3]);
    
    
//     // object
//     let pesron ={
//         userName:"xyz",
//         age:28,
//         city:"CBE",
//         family:{
//             dad:"nbjknnk",
//             mom:"tthkjhkjljkl",
//             siblings:{
//                 brother:"ertyfhjghj",
//                 sister:"nbvghggvn"
//             }
//         }
//     }
//     console.log(pesron.userName);
//     console.log(pesron.family);
//     console.log(pesron.family.siblings);
//     console.log(pesron.family.siblings.sister);

// varibale names
// keywords dont use
// must start by text
// dont use -,space for variable name
// use Underscore
// meaningfullNames


// operators 
// arithmetic
// +,-,*,/,%,++,--
let a = 20
let b = 10
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(--a);
//comparision
// >,<,<=,>=,==,===
console.log(a>b);
console.log(a<b);
console.log(a>=21);
console.log(a<=21);
console.log(a==b);
let c = "21"
console.log(a==c);
console.log(a===c);

// logical
// && ,||,!
console.log(a<=21 && a>b && a===c);
console.log(a<=22 || a<b || a===c);
console.log(a!=b);
// ternary
let age = 20
// console.log(age>=18?"Eligible":"Not Eligible");

// conditional Statements
// if
// if(age>=18){
//     console.log("Eligible");    
// }
// if else
// if(age>=18){
//     console.log("Eligible");    
// }else{
//     console.log("Not Eligible");    
// }
// else if
// if(age>19){
//     console.log("Adult");
// }
// else if(age<13){
//     console.log("Child");
    
// }else{
//     console.log("Teenager");
// }
// nested if
// ug = 72
// hsc=71
// sslc=68
//     if(ug>70){
//         console.log("He is eligible based on UG");
//         if(hsc>70){
//             console.log("He is eligible based on HSC");
//             if(sslc>70){
//                 console.log("He is eligible based on SSLC");                
//             }else{
//                 console.log("He is not eligible based on SSLC");
                
//             }
//         }        
//     }
// switch
let today = "Monday"
switch(today){
    case "Monday":
        console.log("Today is Monday");
        break
    case "Tuesday":
        console.log("Today is Tuesday");
        break
    case "Wednesday":
        console.log("Today is Wednesday");
        break
    case "Thursday":
        console.log("Today is Thursday");
        break
    case "Friday":
        console.log("Today is Friday");
        break
    case "Saturday":
        console.log("Today is Saturday");
        break
    default:
        console.log("Today is Sunday");        
}

// function
// function add(num1,num2){
//     console.log(num1+num2); 
// }
function add(num1,num2){
    return num1+num2 
}


console.log(add(50,80));

// add(60,80)
// add(80,80)

// arrow
const ar = (num1,num2)=>console.log(num1*num2)

ar(50,77)





