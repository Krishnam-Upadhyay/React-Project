const url = 'https://api.github.com/users';

import { useEffect, useState } from "react";
const FetchData = () => {

    const [users, setUserse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                setUserse(users);

            } catch (error) {
                console.log('got error while loading the suers formt eh api');

            }



        };
        fetchData();
    }, []);

    return <section>
        <h3>Github Users</h3>
        <ul className="users">
            {users.map((user => {
                const { id, avatar_url, login, html_url } = user;
                return <li key={id}>
                    <img src={avatar_url} alt={avatar_url} />
                    <div>
                        <h5>{login}</h5>
                        <a href={html_url}>Profile</a>
                    </div>

                </li>
            }))}

        </ul>

    </section>
};
export default FetchData;