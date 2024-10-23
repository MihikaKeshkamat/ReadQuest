import React from 'react'
import list from '../list'
import Card from './Card'
import '../styles/Card.css'
const Shop = ({handleClick}) => { //passed as a prop

    
    return (
        <section>
            <div className="cards-container">
            {list.map((item)=>(
                <Card key={item.id} item={item} handleClick={handleClick}/>
            ))}
            </div>
            
        </section>
    )
}

export default Shop
