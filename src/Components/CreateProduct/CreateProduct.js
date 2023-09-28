import ProductForm from "./ProductForm";
import { useState } from "react";
const CreateProduct = (props) => {

    const [showForm, setShowForm] = useState(false);
    const createProduct = (product) => {
        props.createProduct(product);
    }
    const onClickEventHandler = () => {
        setShowForm(true);
    }
    const onCancelEventHandler = () => {
        setShowForm(false);
    }

    return (

        <div style={{ backgroundColor: 'white', padding: '!0px 20px ', borderRadius: 2 }}>
            {!showForm && <button type="button" onClick={onClickEventHandler}  >Create Product</button>}
            {showForm && <ProductForm createProduct={createProduct} onCanel={onCancelEventHandler} />}
        </div>

    )
}

export default CreateProduct;