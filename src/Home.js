import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" 
                className="home__image" />

                <div className="home__row">
                    <Product
                    id="1234"
                    title="Amazon Basics - Laptop-Trolley, mit schnell laufenden Rollen und leicht zugänglicher Vordertasche - geeignet für Laptops bis 16 Zoll (40 cm)"
                    price={12.99}
                    rating={2}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e-8Or4d7L._AC_SL1500_.jpg" />
                    <Product
                    id="6234"
                    title="Amazon Basics - Hartplatten-Klemmbrett - 10er-Packung "
                    price={12.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81jki4Or7tL._AC_SL1500_.jpg" />
                   
                </div>

                <div className="home__row">
                    <Product
                     id="2234"
                     title="Amazon Basics - Gaming-Mauspad "
                     price={13.99}
                     rating={4}
                     image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71o2ghrFt3L._AC_SL1500_.jpg" />
                    <Product
                     id="3234"
                     title="Amazon Basics – LR44 Alkaline-Knopfzelle, 6 stück  "
                     price={4.99}
                     rating={5}
                     image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PGQqyI4UL._AC_SL1500_.jpg" />
                    
                    <Product
                    id="4234"
                    title="Amazon Basics - PC-Lautsprecher mit dynamischem Sound, USB-Betrieb, Schwarz, 1 Paar"
                    price={14.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81IEOd-7PxL._AC_SL1500_.jpg" />
                   
                </div>

                <div className="home__row">
                    <Product
                    id="5234"
                    title="Amazon Basics Aktenvernichter,7-8 Blatt, Streifenschnitt, CD-Schredder"
                    price={33.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71nU5j6fH-L._AC_SL1500_.jpg" />
                   
                </div>
            </div>   
        </div> 
    )
}

export default Home
