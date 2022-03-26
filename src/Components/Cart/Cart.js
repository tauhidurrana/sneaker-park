import React from 'react';

const Cart = (props) => {
    const{name} = props.item;

    return (
        <div>
            {name}
        </div>
    );
};

export default Cart;