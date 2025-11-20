// import React from 'react'
// import Button from './Button'


// const App = () => {
 
//   return (
//     <div className="App">
//       <Button/>
//     </div>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const Api = 'http://localhost:8242'
  const [product,setProduct] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get(Api)
      if(res){
        await setProduct(res.data)
      }
      console.log(product);
      
    }
    fetchData()
  })
  return (
    <div className='App'>

    </div>
  )
}

export default App