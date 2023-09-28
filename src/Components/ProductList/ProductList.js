import Products from "./Products";
import { useState } from 'react';


const ProductList = (props) => {

    return <div className="row">
        <div className="col-lg-8 mx-auto">
            <ul class="list-group shadow">
                {props.products.map((product) => {
                    return <Products
                        id={product?.pID}
                        name={product?.pName}
                        description={product?.desc}
                        isAvailable={product?.isAvailable}
                        imageUrl={product?.image}
                        price={product?.price}
                    />
                })}



            </ul>
        </div>


    </div>
}
export default ProductList;