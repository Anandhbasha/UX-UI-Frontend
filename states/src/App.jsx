import React, { useState } from 'react'

const App = () => {
  let[count,setCount] = useState(0)
  let [bg,setBg] = useState("dark")
  const handleCount = ()=>{
    setCount(++count)
    console.log(count);
    
  }
  const handleBg = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App' style={{width:"500px",backgroundColor:bg==="dark"?"black":"white"}}>
      <button onClick={handleCount}>Add{count}</button>
      <button onClick={handleBg} style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black"}}>{bg}</button>
    </div>
  )
}

export default App