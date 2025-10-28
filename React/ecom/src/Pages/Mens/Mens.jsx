import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import { Passvalue } from '../../App'

const Mens = () => {
    const all = useContext(Passvalue)
    const mensProd = all.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
        {mensProd.map((item)=>(
            <Cards {...item}/>
        ))}
    </div>
  )
}

export default Mens