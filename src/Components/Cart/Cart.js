import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total,crs) => total + crs.price , 0 );

    const tax = Math.round(total / 10);
    const grandTotal = (total+tax);

    return (
        <div>
            <h1>Enroll Summary :</h1>
            <p>Course Enrolled: {cart.length}</p>
             <p>Course Price: $ {total} </p>
             <p><small>Tax + Vat: ${tax}</small></p>
             <p>Total Price: ${grandTotal}</p>
             <br/>
             <br/>
             <button className="main-button" > Order Review</button>
        </div>
    );
};

export default Cart;