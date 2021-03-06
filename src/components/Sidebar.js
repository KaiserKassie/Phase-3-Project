import React, {useState, useEffect} from "react";
import CartItem from "./CartItem.js"
import Reviews from "./Reviews.js"

function Sidebar({cartItems, total, reviews, setReviews}) {
    
    const renderCartItems = cartItems
    .map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem}  />
    })    

    function fetchReviews () {
        fetch("http://localhost:3000/comments")
        .then((res) => res.json())
        .then((reviewsData) => setReviews(reviewsData))
    }

    useEffect(fetchReviews, []);    

    return (
        <div key={cartItems} className="sidenav">
            <h1 className="myCart">🛒 My Cart</h1>
            {renderCartItems}
            <h4>Total: $ {total}</h4>
            <Reviews setReviews={setReviews} reviews={reviews} />
        </div>
    );
    } 

export default Sidebar;