import React from 'react';

export default function House(props) {
    var {name, address, city, state, zipcode, image, monthly_mortgage, desired_rent} = props.house;
    return (
        <div className="house">
            <div className="houseContainer">
                <img src={image} alt=""/>
            </div>
            <div className="houseFlexContainer">
                <div className="houseInfo">
                    <h1>{name}</h1>
                    <h3>{address}</h3>
                    <h3>{`${city}, ${state} ${zipcode}`}</h3>
                    <h3>Mortgage: {monthly_mortgage}</h3>
                    <h3>Rent: {desired_rent}</h3>
                </div>
            <button className="button pink" onClick={() => props.delete(props.house.id)}>Delete</button>
            </div>
        </div>
    )
}