// import Button from './Button'
// const App = ()=>{
//   return(
//     <div>
//       <Button value ="Click"/>
//       <Button value ="Login"/>
//       <Button value ="Save"/>
//       <Button value ="Delete"/>
//     </div>    
//   )
// }
// export default App



// import Button from './Button'
// const App = ()=>{
//  let btnValue = ["Click","Login","Save","Delete"]
//   return(
//     <div>
//       {btnValue.map((item)=>{
//         return <Button value ={item}/>
//       })}
//     </div>    
//   )
// }
// export default App




import Button from './Button'
const App = ()=>{
 let btnValue = ["Click","Login","Save","Delete"]
  return(
    <div>
      {btnValue.map((item)=>(
         <Button value ={item}/>
      ))}
    </div>    
  )
}
export default App