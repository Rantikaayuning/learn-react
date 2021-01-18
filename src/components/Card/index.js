import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/card.css';

const Card = ({ name, image, stageName, id }) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }
  return (
    <>
        <div className='biodata'>
            <div className={isClick ? 'card-red' : 'card'} >
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p>Known as {stageName}</p>
            <Link to={`/detail-profile/${id}`} onClick={handleClick}>
                <p className='view-more' >View More</p>
            </Link>
            </div>
        </div>
    </>
  );
};

export default Card;