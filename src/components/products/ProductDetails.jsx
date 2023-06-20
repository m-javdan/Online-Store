import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({product}) => {
    if (!product.rating) {
        return;
    }
    console.log(product);
    return (
        <div className="product-details-container">
            <div className="product-details-left">
                <img src={product.image} alt=''/>
            </div>
            <div className="product-details-right">
                <div className="product-details-group">
                    <h3>title</h3>
                    <h2>{product.title}</h2>
                </div>

                <div className="product-details-group">
                    <h3>price</h3>
                    <h2>{product.price}</h2>
                </div>

                <div className="product-details-group">
                    <h3>category</h3>
                    <h2>{product.category}</h2>
                </div>

                <div className="product-details-group">
                    <h3>description</h3>
                    <h2>{product.description}</h2>
                </div>
                <div className="product-details-group">
                    <h3>rating</h3>
                    {/* <h2>{product.rating ? product.rating.rate : ""}</h2> */}
                    <h2>{product.rating.rate}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
