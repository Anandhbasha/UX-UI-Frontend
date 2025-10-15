// // DOM
// // createElement
// let div = document.createElement('div')
// document.body.append(div)
// let btn = document.createElement('button')
// // innerHTML
// // innerText
// // textContent
// btn.textContent="Click"
// div.appendChild(btn)

// btn.addEventListener('click',()=>{
//     // if(btn.innerHTML==="Click"){
//     //     btn.textContent="Clicked"
//     // }
//     // else{
//     //     btn.textContent="Click"
//     // }
//     btn.textContent==="Click"?btn.textContent="Clicked":btn.textContent="Click"
// })

// let input = document.createElement('input')
// div.appendChild(input)

// input.addEventListener('change',()=>{
//     console.log(input.value);
    
// })


// // getElementbyId

// // let userName = document.getElementsByTagName('input')
// // const newValue = (e)=>{
// //     console.log(e.target.value);
    
// // }

// // let userpassword = document.getElementsByTagName('input')
// // console.log(userpassword.value);

// // const newValue1 = (e)=>{
// //     console.log(e.target.value);
    
// // }

// let div =document.createElement('table')
// document.body.append(div)
// let heading1=document.createElement('th')
// heading1.textContent="name"
// div.appendChild(heading1)
// let heading2=document.createElement('th')
// heading2.textContent="roll number"
// div.appendChild(heading2)
// let heading3=document.createElement('th')
// heading3.textContent="STD"
// div.appendChild(heading3)
// let row1=document.createElement('tr')
// row1.textContent="surya"
// heading1.appendChild(row1)
// let row2=document.createElement('tr')
// row2.textContent="82"
// heading2.appendChild(row2)
// let row3=document.createElement('tr')
// row3.textContent="12th"
// heading3.appendChild(row3)



const heading = ["sNo","Name","Age","City","Phone"]

const person = [
    {
        sNo:1,
        Name:"Arun",
        Age:25,
        City:"CBE",
        Phone:9178524154
    },
    {
        sNo:2,
        Name:"Ajay",
        Age:25,
        City:"CBE",
        Phone:91785241247
    },
    {
        sNo:3,
        Name:"Bala",
        Age:25,
        City:"CBE",
        Phone:91785242158
    },
    {
        sNo:4,
        Name:"chandru",
        Age:25,
        City:"CBE",
        Phone:978515718
    }
]

const table =document.createElement("table")
document.body.append(table)
let thead = document.createElement('thead')
table.appendChild(thead)
for(let x of heading){
    let th = document.createElement('th')
    th.innerHTML=x
    thead.appendChild(th)
}
let tbody = document.createElement('tbody')
table.appendChild(tbody)

for(let x of person){
    let tr = document.createElement('tr')
    tbody.appendChild(tr)
    // console.log(Object.values(x));
    // Object.values(x).map((item)=>{
    //     let td = document.createElement('td')
    //     td.innerHTML=item
    //     tr.appendChild(td)
    // })
    let values = Object.values(x)
    console.log(values);
    for(let j of values){
        let td = document.createElement('td')
        td.innerHTML=j
        tr.appendChild(td)
    }
    
    
}
