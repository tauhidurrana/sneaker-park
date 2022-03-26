import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);

    const getRandomItem = () =>{
        const randomIndex = Math.floor(Math.random() * cart.length);
        const item = cart[randomIndex];
        setItems(item);
    }
    console.log(items);

    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
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
                <p>Selected Items: {cart.length}</p>
                <div>
                    <h2>Item Name: </h2>
                    {
                        cart.map(item=><Cart item={item}
                        key={item.id}
                        ></Cart>)
                    }
                    <div>
                        <h2>Select Random one</h2>
                        <button onClick={getRandomItem} className='random-btn'>
                            <h3>Select</h3>
                        </button>
                        <p>{items.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;