
import React from "react";
const imageUrl = 'https://t4.ftcdn.net/jpg/01/16/43/63/360_F_116436349_MgOzZrTJ5mL9hfDVYQS1ZNiVX9kygFjt.jpg';

import ProductDetails from "./ProductDetails";

const style = {
    padding: '0px 20px',
    fontSize: 14
}



const Products = (props) => {




    return (
        <li className="list-group-item" style={{ backgroundColor: props.isAvailable ? "white" : 'gray' }}>
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p handleButtonClick="font-italic text-muted mb-0 small">{props.description}</p>
                    <ProductDetails price={props.price} isAvailable={props.isAvailable} style={style} >

                    </ProductDetails>
                </div><img src={props.imageUrl} alt="Generic placeholder image" width="100" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
    );
}
export default Products;