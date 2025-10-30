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
  const [product,setProduct] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
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