import React, { useState } from "react";
import Cart from "./order-online-components/Cart";
import Header from "./order-online-components/header";
import "../../../styles/Order-online/cart.css"
import CartItems from "./order-online-components/CartItems";

const Order = () => {
    const [show, setShow] = useState(true)
    const [cart, setCart] = useState([])
    const [warning, setWarning] = useState(false)
    const [confirm, setConfirm] = useState(false)

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id) {
                isPresent = true
            }
        })
        if (isPresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        } else {
            setConfirm(true)
            setTimeout(() => {
                setConfirm(false)
            }, 2000);
        }
        setCart([...cart, item])
    }

    const handleChange = (item, o) => {
        let ind = -1
        cart.forEach((data, index) => {
            if (data.id === item.id) {
                ind = index
            }
        })
        const tempArr = cart
        tempArr[ind].amount += o
        if (tempArr[ind].amount === 0) {
            tempArr[ind].amount = 1
        }
        setCart([...tempArr])
    }

    return (
        <>
            {
                warning && <div className="warning">This Item is already in cart.</div>
            }
            {
                confirm && <div className="confirm">Item added to cart.</div>
            }
            <Header size={cart.length} setShow={setShow} />
            {
                show ? <Cart handleClick={handleClick} /> : <CartItems cart={cart} setCart={setCart} handleChange={handleChange} />
            }
        </>
    )
}

export default Order