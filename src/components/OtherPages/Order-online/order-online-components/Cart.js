import React from 'react'
import data from './data'
import Card from './Card'
import "../../../../styles/Order-online/cart.css"

const Cart = ({handleClick}) => {
  return (
    <>
      <section className='main-cart-section'>
        {
          data.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick}/>
          ))
        }
      </section>
    </>
  )
}

export default Cart