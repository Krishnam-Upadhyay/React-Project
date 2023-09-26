import React from "react";

const handleButtonClick = () => {
    console.log('button clicked');
}

const Button = (props) => {
    return <button
        onClick={props.eventHandler}
        type="button"
        className="btn btn-primary"
    >{props.children}</button>

}
export default Button;