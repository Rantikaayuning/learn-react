import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API } from '../../utility/constant';

const Contributor = () => {
    const [ users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const result = await axios(BASE_API);
            setUsers(result.data.data);
        }
        fetchData();
    }, []);

    // console.log(users);

    return (      
        <>
        <div className='card3'>
            {users.map((user, index) => (
                <ul>
                    <li key={index}>
                        <img src={user.avatar} alt={user.first_name}/>
                        <p>{user.first_name} {user.last_name}</p>
                    </li>
                </ul>
            ))}
        </div>
        </>
    )
}

export default Contributor;