import React, { useEffect, useState } from 'react'
import "../../../../styles/Order-online/cart.css"

const CartItems = ({ cart, setCart, handleChange }) => {

  const [price, setPrice] = useState(0)

  const handlePrice = () => {
    let ans = 0
    cart.map((item) => (
      ans += item.amount * item.price
    ))
    setPrice(Math.round(ans).toFixed(2))
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <article className='cartItems'>
      {
        cart?.map((item) => (
          <div className='cart-box' key={item.id}>
            <div className="cart-img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div className='qtyControls'>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div className='otherControls'>
              <span>${item.price}</span>
              <button onClick={()=> handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      }
      <div className='totalPrice'>
        <span>Total price- </span>
        <span>${price}</span>
      </div>
    </article>
  )
}

export default CartItems