import React from 'react'
import "../../../../styles/Order-online/cart.css"

function Header({size, setShow}) {
    return (
        <header className='cart-header'>
            <div className='order-online'>
                <img src={require("../../../../assets/order-icon.png")} alt="" />
                <h1 onClick={() => {setShow(true)}}>Order Online</h1>
            </div>
            <div className='cart-icon'>
                <img src={require("../../../../assets/cart-icon.png")} alt="" onClick={() => setShow(false)} />
                <p>{size}</p>
            </div>
        </header>
    )
}

export default Header