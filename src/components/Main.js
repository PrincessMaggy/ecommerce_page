import React from "react";
//importing assets
// import cart from '../images/icon-cart.svg';
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
            <h2> Fall Limited Edition <br/>Sneakers</h2>
            <p> These low profile sneakers are your perfect casual wear<br/>
                companion. Featuring a durable rubber outer sole, they'll<br/>
                 withstand everything the weather can offer.
            </p>

            <div className="price">
                <h3> $125.00 </h3> 
                <h6>50%</h6>
            </div>

            <h5><strike>$250.00</strike></h5>

            <div className="btns">
                <div className="alter">
                    <img src={minus} alt="minus" />
                    <span>0</span>
                    <img src={plus} alt="plus" />
                </div>

                <div className="alter2">
                    <button> <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                     <span>Add to cart </span></button>
                </div>
            </div>
        </div>
    </div>
)

}


export default Main;