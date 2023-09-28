import Products from "./Products";
import { useState } from 'react';


const ProductList = (props) => {
    return props.products.length == 0 ? <h1>no productavailabe</h1> : (
        <ul class="list-group shadow">
            {props.products.map((product) => {
                return <Products
                    key={product?.id}
                    id={product?.pID}
                    name={product?.pName}
                    description={product?.desc}
                    isAvailable={product?.isAvailable}
                    imageUrl={product?.image}
                    price={product?.price}
                />
            })}



        </ul>)




}
export default ProductList;