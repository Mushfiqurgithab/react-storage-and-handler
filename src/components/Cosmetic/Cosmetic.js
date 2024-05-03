import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id); // click F12
    }

    // const addToCart = (id) => {
    //     console.log('item added',id);
    // }
    // const addToCartWithParam = () => addToCart(id);

    const removeFromCart = id => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart: shortcut</button> 
            {/*IN onClick function we send Parameter {addTocart(id)} That's why we using arrow function or make a system. On Other hand it call directly  */}
            <button onClick={() => removeFromCart(id)}>Remove</button>

            {/* <h2>Buy this: {props.cosmetic.name}</h2>
            <p>Only for: ${props.cosmetic.price}</p> */}
        </div>
    );
};

export default Cosmetic;