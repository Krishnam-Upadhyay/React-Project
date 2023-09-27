import React from "react";
import { useState } from "react";
const ProductForm = (props) => {

    const [name, updateName] = useState('');
    const [price, updatePrice] = useState('');
    const [description, updateDescription] = useState('');
    const [available, updateAvailable] = useState('');
    const [imgUrl, updateImgUrl] = useState('');

    const [userInput, updateUserInput] = useState({
        pname: '',
        pprice: "",
        pdesciption: '',
        pavailable: true,
        pimageUrl: ''
    })

    const nameInputHandler = (e) => {
        // updateName(event.target.value)
        updateUserInput((preState) => {
            return { ...preState, pname: e.target.value }
        }
        );

    }
    const priceInputHandler = (e) => {
        updateUserInput((preState) => {
            return { ...preState, pprice: e.target.value }
        }
        );

    }
    const descriptionInputHandler = (e) => {
        updateUserInput((preState) => {
            return { ...preState, pdesciption: e.target.value }
        }
        );

    }
    const availabilityInputHandler = (e) => {
        updateUserInput((preState) => {
            return { ...preState, pavailable: e.target.checked }
        }
        );

    }
    const imageInputHandler = (e) => {
        updateUserInput((preState) => {
            return { ...preState, pimageUrl: e.target.value }
        }

        );

    }
    const createProductEventHandler = (e) => {
        e.preventDefault();

        const product = {
            pID: 1,
            pName: userInput.pname,
            desc: userInput.pdesciption,
            isAvailable: Boolean(userInput.pavailable),
            image: userInput.pimageUrl,
            price: Number(userInput.pprice),
        };

        props.createProduct(product);

        updateUserInput({
            pname: '',
            pprice: "",
            pdesciption: '',
            pavailable: true,
            pimageUrl: ''
        });


    }
    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={userInput.pname}
                    placeholder="Product Name"
                    onChange={nameInputHandler}
                />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    value={userInput.pprice}
                    placeholder="Product Price"
                    onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    value={userInput.pdesciption}
                    placeholder="Product Description"
                    onChange={descriptionInputHandler} />
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
                    onChange={availabilityInputHandler}
                    checked={userInput.pavailable} />
                <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={userInput.pimageUrl}
                    onChange={imageInputHandler} />
            </div>


            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

export default ProductForm;