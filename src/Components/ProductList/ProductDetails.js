import React, { useState } from "react";
import Button from "./Button";
const ProductDetails = (props) => {

    let badgeClass = 'badge-margin-left-240 badge ';

    let [productCont, setProductCount] = useState(0);

    const incrementEventHandler = () => {
        let newValue = productCont += 1;
        setProductCount(newValue);

    }
    const decrementtEventHandler = () => {
        if (productCont === 0) {
            productCont;
            return;
        }
        let newValue = productCont -= 1;
        setProductCount(newValue);

    }
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>${props.price}</h6>
            <Button eventHandler={decrementtEventHandler}>-</Button>
            <span style={props.style}>{productCont}</span>
            <Button eventHandler={incrementEventHandler}>+</Button>
            <span className={badgeClass + (props.isAvailable ? 'bg-success' : 'bg-danger')}>{props.isAvailable ? "Available" : "UnAvailable"}</span>

        </div>
    );
}

export default ProductDetails;