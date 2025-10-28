import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import { Passvalue } from '../../App'

import './Allproducts.css'
const Allproducts = () => {
    const all = useContext(Passvalue)
  return (
    <div className='Allproducts'>
        {all.map((item)=>(
            <Cards {...item}/>
        ))}
    </div>
  )
}

export default Allproducts