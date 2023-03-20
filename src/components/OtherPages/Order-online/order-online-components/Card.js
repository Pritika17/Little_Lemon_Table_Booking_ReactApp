import React from 'react'
import "../../../../styles/Order-online/cart.css"

function Card({ item, handleClick }) {
  const { title, description, price, img } = item
  return (
    <div className='cards'>
      <div className='img-box'>
        <img src={img} alt="" />
      </div>
      <div className='details'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='price-btn'>
          <p>Price - ${price}</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card