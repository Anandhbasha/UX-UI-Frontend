import React from 'react'
import './Cards.css'

const Cards = ({productName,productPrice,productDesrc,image}) => {
  return (
    <div className='Cards'>
      <div className='topSection'>
        <img src={image}></img>
      </div>
      <div className='btmSection'>
        <h3>{productName}</h3>
        <h4>{productPrice}</h4>
        <h5>{productDesrc}</h5>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Cards