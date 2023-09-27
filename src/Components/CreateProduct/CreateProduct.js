import ProductForm from "./ProductForm";
const CreateProduct = (props) => {

    const createProduct = (product) => {
        props.createProduct(product);
    }

    return (
        <div className="row">
            <div className='col-lg-8 mx-auto' style={{ backgroundColor: 'white', padding: '!0px 20px ', marginBottom: 30 }}>
                <ProductForm createProduct={createProduct} />
            </div>
        </div>
    )
}

export default CreateProduct;