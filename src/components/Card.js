import React from 'react';
import '../styles/Card.css';
// import {useNavigate} from 'react-router-dom';


const Card = ({ item,handleClick }) => {
    // const navigate = useNavigate();
    // const addToCartAndNavigate = (item) => {
    //     handleClick(item);
    //     navigate('/cart');
    // }

    if (!item) return <p>Loading</p>;
    return (
        <>
            <div className="cards">
                <div className="image_box">
                    <img src={item.img} alt="Images" />
                </div>

            </div>
            <div className="details">
                <p>{item.title}</p>
                <p>{item.author}</p>
                <br />
                <p>Price: {item.price} Rs</p>
                <br />
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </>
    );
}

export default Card
