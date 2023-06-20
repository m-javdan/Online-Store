import React from "react";
import {Link} from "react-router-dom";
import {FaShoppingBasket} from "react-icons/fa";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";

import {useDispatch} from "react-redux";

const Product = ({product}) => {
    const dispatch = useDispatch();
    const increase = () => {

        const objectTest = {
            type: "ADD",
            payload: product
        }
        dispatch(objectTest);
        toast.success("محصول به سبد خرید اضافه شد");
    };
    return (
        <>
            <div className="product-card">
                <Link to={`/product/${product.id}`}>
                    <img className="product-card-image" src={product.image} alt='product-card'/>
                </Link>
                <div className="product-card-title">
                    <h5 className="product-card-title-first">Name: {product.title}</h5>
                    <h5>
                        Price: <span className="card-price-span">{product.price}</span>
                    </h5>
                </div>
                <div className="product-card-footer">
                    <button onClick={increase} className="btn btn-primary">
                        Add To Card <FaShoppingBasket/>{" "}
                    </button>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
};

export default Product;
