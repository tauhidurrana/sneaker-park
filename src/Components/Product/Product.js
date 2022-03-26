import React from 'react';
import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, id, img, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: BDT {price}</p>
                <p><small>ID: {id}</small></p>
            </div>
            <button className='btn-cart'>
                <h2>Add to cart</h2>
                
            </button>
        </div>
    );
};

export default Product;