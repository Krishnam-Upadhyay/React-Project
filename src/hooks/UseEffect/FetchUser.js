const url = 'https://api.github.com/users/QuincyLarson';

import { useEffect, useState } from "react";
const FetchUser = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                }
                const userData = await response.json();

                setUser(userData);

            } catch (error) {
                console.log('got error while loading the suers formt eh api');
                setIsError(true);

            };
            setIsLoading(false);



        };
        fetchData();
    }, []);

    if (isLoading) {
        return <h3>Loading...</h3>

    }
    if (isError) {
        return <h3>There was an Error in Loading</h3>
    }
    const { name, avatar_url, company, bio } = user
    return (<div>
        <img style={{ width: "150px", borderRadius: '25px' }} src={avatar_url
        } alt={name} />
        <h3>{name}</h3>
        <h4>works at : {company}</h4>
        <h4>{bio}</h4>

        <h4>Completed till 7:16:49 in free code camp org videos</h4>
    </div>)
};
export default FetchUser;