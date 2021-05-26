import React from 'react';
import contacts from '../contacts.json';

const Detail = ({selected}) => {
    return (
        <div className="col right">
            <div className="details">
                {contacts[selected] &&
                <ul className="info">
                    <li>이름: {contacts[selected]['name']}</li>
                        <li>휴대폰:{contacts[selected]['phone']} </li>
                        <li>SNS:{contacts[selected]['sns']} </li>
                        <li>주소:{contacts[selected]['address']} </li>
                </ul>}
                <p className="emptyset"></p>
            </div>
        </div>
    )
}
export default Detail;