import { useState } from "react";
const UseState = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);

    }
    return <div>
        <h4>Your Count: {count}</h4>
        <button type="button" className="btn" onClick={handleClick}>Increase</button>
    </div>
};
export default UseState;