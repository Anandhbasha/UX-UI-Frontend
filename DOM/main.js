// DOM
// createElement
let div = document.createElement('div')
document.body.append(div)
let btn = document.createElement('button')
// innerHTML
// innerText
// textContent
btn.textContent="Click"
div.appendChild(btn)

btn.addEventListener('click',()=>{
    // if(btn.innerHTML==="Click"){
    //     btn.textContent="Clicked"
    // }
    // else{
    //     btn.textContent="Click"
    // }
    btn.textContent==="Click"?btn.textContent="Clicked":btn.textContent="Click"
})

let input = document.createElement('input')
div.appendChild(input)

input.addEventListener('change',()=>{
    console.log(input.value);
    
})


// getElementbyId

// let userName = document.getElementsByTagName('input')
// const newValue = (e)=>{
//     console.log(e.target.value);
    
// }

// let userpassword = document.getElementsByTagName('input')
// console.log(userpassword.value);

// const newValue1 = (e)=>{
//     console.log(e.target.value);
    
// }

