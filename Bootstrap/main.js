// // // Hoisting
// // // console.log("Hello this JavaScript");
// // // var
// // // var newText = "Hello this JavaScript"
// // // console.log(newText);

// // // // console.log(a);
// // // var a=10
// // // var a=60
// // // a=70
// // // console.log(a);

// // // // console.log(a);

// // // // let

// // // let b=20
// // // b=60
// // // console.log(b);

// // // // const
// // // const c=44
// // // // c=88
// // // console.log(c);

// // // // block scope 
// // // // global scope 

// // // {
// // //     const d = 80
// // // }
// // // console.log(d);

// // // datatypes
// // // premitive
// //     let a = 20.2
// //     let userName = "xyz"
// //     let todayClassAvalible = true
// //     console.log(typeof(todayClassAvalible));
    
// //     console.log(typeof(userName));
// //     let b = undefined
// //     console.log(typeof(b));
// //     let c =null
// //     console.log(typeof(c));
    
// // // non premitive
// //     // array
// //     let arr = [20,"xyz",true,undefined] //index = 0
// //     console.log(arr);
// //     console.log(arr[0]);
// //     console.log(arr[1]);
// //     console.log(arr[2]);
// //     console.log(arr[3]);
    
    
// //     // object
// //     let pesron ={
// //         userName:"xyz",
// //         age:28,
// //         city:"CBE",
// //         family:{
// //             dad:"nbjknnk",
// //             mom:"tthkjhkjljkl",
// //             siblings:{
// //                 brother:"ertyfhjghj",
// //                 sister:"nbvghggvn"
// //             }
// //         }
// //     }
// //     console.log(pesron.userName);
// //     console.log(pesron.family);
// //     console.log(pesron.family.siblings);
// //     console.log(pesron.family.siblings.sister);

// // varibale names
// // keywords dont use
// // must start by text
// // // dont use -,space for variable name
// // // use Underscore
// // // meaningfullNames


// // // operators 
// // // arithmetic
// // // +,-,*,/,%,++,--
// // let a = 20
// // let b = 10
// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log(a%b);
// // console.log(a++);
// // console.log(++a);
// // console.log(--a);
// // //comparision
// // // >,<,<=,>=,==,===
// // console.log(a>b);
// // console.log(a<b);
// // console.log(a>=21);
// // console.log(a<=21);
// // console.log(a==b);
// // let c = "21"
// // console.log(a==c);
// // console.log(a===c);

// // // logical
// // // && ,||,!
// // console.log(a<=21 && a>b && a===c);
// // console.log(a<=22 || a<b || a===c);
// // console.log(a!=b);
// // // ternary
// // let age = 20
// // // console.log(age>=18?"Eligible":"Not Eligible");

// // // conditional Statements
// // // if
// // // if(age>=18){
// // //     console.log("Eligible");    
// // // }
// // // if else
// // // if(age>=18){
// // //     console.log("Eligible");    
// // // }else{
// // //     console.log("Not Eligible");    
// // // }
// // // else if
// // // if(age>19){
// // //     console.log("Adult");
// // // }
// // // else if(age<13){
// // //     console.log("Child");
    
// // // }else{
// // //     console.log("Teenager");
// // // }
// // // nested if
// // // ug = 72
// // // hsc=71
// // // sslc=68
// // //     if(ug>70){
// // //         console.log("He is eligible based on UG");
// // //         if(hsc>70){
// // //             console.log("He is eligible based on HSC");
// // //             if(sslc>70){
// // //                 console.log("He is eligible based on SSLC");                
// // //             }else{
// // //                 console.log("He is not eligible based on SSLC");
                
// // //             }
// // //         }        
// // //     }
// // // switch
// // let today = "Monday"
// // switch(today){
// //     case "Monday":
// //         console.log("Today is Monday");
// //         break
// //     case "Tuesday":
// //         console.log("Today is Tuesday");
// //         break
// //     case "Wednesday":
// //         console.log("Today is Wednesday");
// //         break
// //     case "Thursday":
// //         console.log("Today is Thursday");
// //         break
// //     case "Friday":
// //         console.log("Today is Friday");
// //         break
// //     case "Saturday":
// //         console.log("Today is Saturday");
// //         break
// //     default:
// //         console.log("Today is Sunday");        
// // }

// // // function
// // // function add(num1,num2){
// // //     console.log(num1+num2); 
// // // }
// // function add(num1,num2){
// //     return num1+num2 
// // }


// // console.log(add(50,80));

// // // add(60,80)
// // // add(80,80)

// // // arrow
// // const ar = (num1,num2)=>console.log(num1*num2)

// // ar(50,77)




// // loops
// if(10<15){
//     console.log("If is working");
    
// }

// // while(condition){
// // }
// // let a = 10

// // while(a<15){
// //     console.log("while is working");  
// //     a++  
// // }

// // array iteration
// let arr = [10,20,13,43,55]
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
// // let a =0
// // while(a<arr.length){ //1:a=0,2:a=1: 3:a=2,4:a=3,5:a=4  arr.length = 5
// //     console.log(arr[a]);
// //     a++   
// // }
// // // do while
// // do{
// //     console.log("Do while is working");
    
// // }while(10>15)

// // // for
// // for(let x=0;x<arr.length;x++){
// //     console.log(arr[x]);
// // }

// for(let x=0;x<arr.length;x++){
//     if(arr[x]%2==0){
//         console.log(arr[x]);
        
//     }
// }


// let userName = "Anandh"
// let output = ""
// for(let j=0;j<userName.length;j++){
//     output = output+userName[j]
//     console.log(output);    
// }

// // h
// // hd
// // hdn
// // hdna
// // hdnan
// // hdnana
// // task:2
// // reverse
// // hdnana
// // 3
// // let arr = [10,20,13,43,55]
// // [1,2,4,7,10]

// // 4
// // palimdrome
// // malayalam
// // 5
// // array total 

// // for of
// // for(let x of arr){
// //     console.log(x);    
// // }

// // // for in 
// // for(let x in arr){
// //     console.log(arr[x]);    
// // }

// // foreach
// // arr.forEach((x)=>console.log(x))

// // // array methods
// // // MRF
// // // Map
// // // arr.map((x)=>console.log(x))
// // // // reduce
// // // let total = arr.reduce((x,y)=>x*y) //x=0,y=10 // 2:x=10,y=20 //x=30 y= 13
// // // console.log(total);

// // // // filter
// // // console.log(arr.filter((x)=>x%2==0));

// // // array methods
// // // pop
// let newArray = [100,22,55,1,9,77,88]
// newArray.pop()
// console.log(newArray);

// // push
// newArray.push(105)
// console.log(newArray);

// // shift
// newArray.shift()
// console.log(newArray);

// // unshift
// newArray.unshift(203)
// console.log(newArray);

// // slice
// console.log(newArray.slice(0,3));

// // newArray[3] = 500
// // console.log(newArray);

// // splice
// newArray.splice(3,0,500)
// console.log(newArray);

// // indexOf
// console.log(newArray.indexOf(50));

// // includes
// console.log(newArray.includes(55));

// // find
// let finds = newArray.find((x)=>x==50)
// console.log(finds);

// // sort
// let names = ["bala","arun","aadhi"]
// console.log(names.sort());
// console.log(newArray.sort());

// // split
// let newNames = "lal-prasath"
// let values = newNames.split("-")
// console.log(values);

// // spread
// let spreads1 = [names,newArray]
// console.log(spreads1);
// let spreads = [...names,...newArray]
// console.log(spreads);



// // rest
// // destructure
// let [first,second,...a] = spreads
// console.log(first);
// console.log(second);
// console.log(a);

// let newUser = {
//     firstName:"Arun",
//     secondName:"Venkadachalam",
//     city:"CBE",
//     Education:"Mster of Engineering"
// }

// let {firstName,secondName} = newUser
// console.log("His First Name is:" +firstName,"His Second Name is :"+secondName);


// // template literlas

// console.log(`His First Name is:${firstName} His Second Name is :${secondName}`);

// // setTimeout
// setTimeout(()=>{
//     console.log("Settimeout is working");
    
// },5000)
// // setInterval
// setInterval(()=>{
//     console.log("SetInterval");
    
// },2000)

// let h1 = document.getElementById('value')
// const add = (a,b)=>{
//    h1.innerHTML = a+b   
// }


// // palindrome

// userName = "racecar" //hsaka racecar

// temp=""
// for(let a=userName.length-1;a>=0;a--){
//     temp+=userName[a]
// }
// console.log(userName===temp?"is Palindrome":"Not Palindrome");

// promise
// const bookTicket = new Promise((resolved,reject)=>{
//     let success = false;
//     if(success){
//         resolved("Ticket Booked Succesfully Ticket price is :200")
//     }
//     else{
//         reject("Unable to book the ticket")
//     }
// })

// bookTicket.then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// all
// any
// race
// allsettled

// let friend1 = new Promise((resolved,reject)=>{
//     let reached1 = false
//     if(reached1){
//         resolved("Reached1 Home")
//     }else{
//         reject("Not yet reached1")
//     }
// })
// let friend2 = new Promise((resolved,reject)=>{
//     let reached2 = false
//     if(reached2){
//         resolved("Reached2 Home")
//     }else{
//         reject("Not yet reached2")
//     }
// })
// let friend3 = new Promise((resolved,reject)=>{
//     let reached3 = true
//     if(reached3){
//         resolved("Reached3 Home")
//     }else{
//         reject("Not yet reached3")
//     }
// })
// let friend4 = new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         let reached4 = true
//     if(reached4){
//         resolved("Reached4 Home")
//     }else{
//         reject("Not yet reached4")
//     }
//     },5000)
// })
// let friend5 = new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//             let reached5 = false
//         if(reached5){
//             resolved("Reached5 Home")
//         }else{
//             reject("Not yet reached5")
//         }
//     },3000)
// })

// Promise.all([friend1,friend2,friend3,friend4,friend5]).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// Promise.race([friend1,friend2,friend3,friend4,friend5]).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// Promise.any([friend1,friend2,friend3,friend4,friend5]).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})


// Promise.allSettled([friend1,friend2,friend3,friend4,friend5]).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})


// // fetch
// const fetchData = new Promise((resolved,reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Unbale to connect API")
//         }
//     })
// })

// fetchData.then((result)=>console.log(result)).catch((err)=>{console.log(err)})

// async
const fetchData = async()=>{
    try{
        let res  = await fetch('https://jsonplaceholder.typicode.com/po')
        if(!res.ok){
            throw Error("Unable to connect API")
    }
    let data = await res.json()
        console.log(data);
}
    catch(err){
        console.log(err);        
    }
    
}

fetchData()
