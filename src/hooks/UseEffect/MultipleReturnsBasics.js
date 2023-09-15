import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            //done fetching data;
            setIsLoading(false);

        }, 3000);
    }, []);

    if (isLoading) {
        return <h4>Loading...</h4>;
    }
    return <>
        <h2>Multiple Returns Basics</h2>
        <h1>completed till 6:25:12 youtube freecodecamporg</h1>;
    </>;
};
export default MultipleReturnsBasics;