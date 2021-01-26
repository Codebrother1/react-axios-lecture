import React from 'react';

const Card = (props) => {
    return <div className="card">
        <img src={props.imageUrl} alt={props.name}/>
        <span>{props.name}</span>
    </div>
}

export default Card;