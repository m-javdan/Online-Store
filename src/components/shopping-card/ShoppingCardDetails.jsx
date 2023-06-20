import React from "react";
import {useSelector} from "react-redux";
import "./ShoppingCardDetails.css";
import {useDispatch} from "react-redux";
import {FaTrashAlt} from 'react-icons/fa';

const ShoppingCardDetails = () => {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();

    const increase = (product) => {

        const objectAdd = {
            type: "ADD",
            payload: product
        }

        dispatch(objectAdd);

    };

    const decrease = (product) => {
        const objectSub = {
            type: "SUB",
            payload: product
        }

        dispatch(objectSub)
    }

    const remove = (product) => {
        const objectRemove = {
            type: "REMOVE",
            payload: product
        }

        dispatch(objectRemove)
    }

    const reset = () => {
        const objectReset = {
            type: "RESET"
        }

        dispatch(objectReset);
    }

    return (
        <div className="shopping-container container">
            <h1>Shopping Card Details</h1>
            <button onClick={() => reset()} className="btn btn-primary">CLear Entire Shopping Card</button>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Increase</th>
                    <th scope="col">Decrease</th>
                    <th scope="col">Remove</th>
                </tr>
                </thead>
                <tbody>
                {state.map((product) => (
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>{product.count}</td>
                        <td>
                            <button onClick={() => increase(product)} className="btn btn-success">+</button>
                        </td>
                        <td>
                            <button onClick={() => decrease(product)} className="btn btn-danger">-</button>
                        </td>
                        <td>
                            <button onClick={() => remove(product)} className="btn btn-info"><FaTrashAlt/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShoppingCardDetails;
