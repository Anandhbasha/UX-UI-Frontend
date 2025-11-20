// import React, { useState } from 'react'

// const App = () => {
//   const data =[
//     {names:"xyz",age:20},
//     {names:"abc",age:20},
//     {names:"def",age:20},
//     {names:"cdef",age:20},
//     {names:"awdr",age:20},
//     {names:"tgr",age:20},
//     {names:"efw",age:20},
//     {names:"wsctt",age:20},
//     {names:"opuf",age:20},
//   ]
//   const options = [2,4,6,9]
//   const [filter,setFilter] = useState(2)
//   const handleChange = (e)=>{
//     setFilter(e.target.value)
//   }
//   return (
//     <div className='App'>
//       <select onChange={handleChange}>
//         {options.map((item)=>(
//           <option>{item}</option>
//         ))}
//       </select>
//       <table border={1}>
//         <thead>
//           {Object.keys(data[0]).map((item)=>(
//             <th>{item}</th>
//           ))}
//         </thead>
//         <tbody>
//           {data.slice(0,filter).map((x)=>(
//             <tr>
//               {Object.values(x).map((val)=>(
//                 <td>{val}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App





// useEffect

import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount] = useState(0)

  const handleCount = ()=>{
    setCount((prev)=>++prev)
  }
  useEffect(()=>{
    console.log("UseEffect is working");
    
  },[count])
  return (
    <div className='App'>
      <button onClick={handleCount}>Add{count}</button>
    </div>
  )
}

export default App