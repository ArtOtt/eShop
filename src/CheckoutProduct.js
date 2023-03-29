import React from 'react';
import "./CheckoutProduct.css";

export default function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e-8Or4d7L._AC_SL1500_.jpg" alt="" 
        className="checkoutProduct_image" />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
            Amazon Basics - Laptop-Trolley, mit schnell laufenden Rollen und leicht zugänglicher Vordertasche - geeignet für Laptops bis 16 Zoll (40 cm)
            </p>
            <p className="checkoutProduct_price">
                <small>€</small>
                <strong>20</strong>
            </p>
            <div className="checkoutProduct_rating">
                ★★
            </div>
            <button>Remove from Basket</button>
        </div>
    </div>

  )
}
