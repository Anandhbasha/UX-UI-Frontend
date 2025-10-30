import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'

const Button = () => {
    const dispatch = useDispatch()
    const countings = useSelector((state)=>state.counts.count)
  return (
    <div className='Button'>
        <p>{countings}</p>
        <button onClick={()=>dispatch(increment(1))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Button