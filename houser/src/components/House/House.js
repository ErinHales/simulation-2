import React from 'react';

export default function House(props) {
    var {name, address, city, state, zipcode, image, mortgage, rent} = props.house;
    return (
        <div className="house">
            <h1>{name}</h1>
            <h3>{address}</h3>
            <h3>{`${city}, ${state} ${zipcode}`}</h3>
            <h3>{image}</h3>
            <h3>{mortgage}</h3>
            <h3>{rent}</h3>
            <button className="button pink" onClick={() => props.delete(props.house.id)}>Delete</button>
        </div>
    )
}