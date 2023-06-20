import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import ProductDetails from "../components/products/ProductDetails";

const Product = () => {

    const {id} = useParams();
    console.log(id)

    const [product, setProducts] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setLoading(false);
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="">
            {
                loading ? <Spinner/>
                    :
                    <ProductDetails product={product}/>
            }
        </div>
    );
};

export default Product;