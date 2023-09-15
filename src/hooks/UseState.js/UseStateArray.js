import { data } from '../../data';
import { useState } from 'react';
const UseStateArray = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id != id));
    };
    const clearItem = () => {
        setPeople([]);
    };






    return <div>
        {people.map((person => {
            return (
                <div key={person.id}>
                    <h4>{person.name}</h4>
                    <button type='button' className='btn' onClick={() => removeItem(person.id)}>remove</button>
                </div>
            )

        }
        ))}

        <button type='button' className='btn-danger' onClick={clearItem}>ClearAll</button>

    </div>
}
export default UseStateArray;