import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { USER_API } from '../../utility/constant';

const ContributorDetail = () => {
    const [ user, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async() => {
            const result = await axios(USER_API + id);
            setUser(result.data.data);
        }
        getData();
    }, [id]);

    console.log(user);

    return (      
        <>
        <div className='detail-contributor'>
           <p>{user.first_name} {user.last_name}</p>
           <p><img src={user.avatar} alt={user.first_name}/></p>
           <p>{user.email}</p>
           <p>
           <Link to={`/contributor-detail/${user.id - 1}`}>
                <button className='view-more' >Prev</button>
            </Link>
           <Link to={`/contributor-detail/${user.id + 1}`}>
                <button className='view-more' >Next</button>
            </Link>
            </p>
        </div>
        </>
    )
}

export default ContributorDetail;