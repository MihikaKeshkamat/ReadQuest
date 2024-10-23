import React, { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Shop from './components/Shop'
import Card from './components/Card'
import Cart from './components/Cart'
import './styles/App.css'
const App = () => {
  // const[show,setShow] = useState(true);
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage or initialize to an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const [warning, setWarning] = useState(false);
  const handleClick = (item) => {
    let isPresent = (cart.some((product) => product.id === item.id));
    if(isPresent){
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }

    setCart([...cart,{...item,amount:1}]);
    // alert("Item added to Cart!");
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar size={cart.length} />
        {/* {
              
              show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart}/>
        } */}
        {warning && <div className="warning">
          "Item already added to Cart!  </div>}
          <div className="content">
        
      </div>
        <Routes>
          <Route path="/" element={
            <div>
              <Shop handleClick={handleClick} />
              
              <Card cart={cart} />
            </div>
          }
          />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

