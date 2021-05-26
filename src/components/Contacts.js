import React, {useState} from 'react';
import contacts from '../contacts.json';
import Detail from "./Detail";


const Contacts = () => {
    const [select, setSelect] = useState();

    const selectContact = (id) => {
        setSelect(id)
        console.log(id)
    }

    return (
        <div className="contact-wrap">
            <div className="col left">
                <div className="search-box">
                    <input type="text" className="inp-sch" placeholder="검색어를 입력하세요."/>
                </div>
                <div className="contact-list">
                    <ul>
                        {contacts.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <button type="button" onClick={e => selectContact(index)}>{contact.name}</button>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
            <Detail selected={select}/>
        </div>
    )
}
export default Contacts