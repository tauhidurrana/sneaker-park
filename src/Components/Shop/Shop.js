import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        console.log(product);
    }

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                   products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
               }
            </div>
            <div className='cart-container'>
                <h2>Product Summary</h2>
            </div>
        </div>
    );
};

export default Shop;