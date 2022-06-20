import React from "react";
//importing assets
import cart from '../images/icon-cart.svg';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import product1 from '../images/image-product-1.jpg';

const Main = () =>{

return(
    <div className="main">
        <div className="one">
            <div className="product">
                <img src={product1} alt="thumb" />
            </div>

            <div className="thumbnails">
                <img src={thumb1} alt="thumb1" />
                <img src={thumb2} alt="thumb2" />
                <img src={thumb3} alt="thumb3" />
                <img src={thumb4} alt="thumb4" />

            </div>
        
        </div>

        <div className="two">
            <h4>SNEAKER COMPANY</h4>
            <h2> Fall Limited Edition Sneakers</h2>
            <p> These low profile sneakers are your perfect casual wear<br/>
                companion. Featuring a durable rubber outer sole, they'll<br/>
                 withstand everything the weather can offer.
            </p>

            <div className="price">
                <h3> $125 </h3> 
                <h6>50%</h6>
            </div>

            <h5><strike>$250.00</strike></h5>

            <div className="btns">
                <div className="alter">
                    <img src={minus} alt="minus" />
                    <span></span>
                    <img src={plus} alt="plus" />
                </div>

                <div>
                    <button> <img src ={cart}  alt="cart" /> Add to cart</button>
                </div>
            </div>
        </div>
    </div>
)

}


export default Main;