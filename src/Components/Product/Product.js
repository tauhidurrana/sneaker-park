import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {handleAddToCart, product} = props
    const {name, id, img, price} = product;
    // console.log(props);
    
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: BDT {price}</p>
                <p><small>ID: {id}</small></p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <h2 className='btn-text'>Add to cart</h2>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;