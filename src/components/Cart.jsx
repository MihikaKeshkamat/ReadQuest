import React, { useState, useEffect } from 'react';
import '../styles/Card.css';

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);

    // Calculate the total price whenever the cart changes
    useEffect(() => {
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
        setPrice(totalPrice);
    }, [cart]);

    if (cart.length === 0) return <p>Your cart is empty.</p>;

    const removeFromCart = (id) => {
        const updatedCart = (cart.filter((item) => item.id !== id));
        setCart(updatedCart);
    };

    const incrementAmount = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
        setCart(updatedCart);
    };

    const decrementAmount = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id && item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
        );
        setCart(updatedCart);
    };

    return (
        <div className="cards-container">
            {cart.map((item) => (
                <div className="cards" key={item.id}>
                    <img src={item.img} alt={item.title} className="image_box" />
                    <div className="details">
                        <p>{item.title}</p>
                        <p>Price: {item.price} Rs</p>
                        <p>Quantity: {item.amount}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>

                        <button onClick={() => incrementAmount(item.id)}>+</button>
                        <button onClick={() => decrementAmount(item.id)}>-</button>

                    </div>
                </div>
            ))}
            <div className="total-price">
                <h3>Total Price: {price} Rs</h3>
            </div>
        </div>
    );
};

export default Cart;
