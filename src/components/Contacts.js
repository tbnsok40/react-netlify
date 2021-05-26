import React, {useState, useRef, useEffect} from 'react';
import contacts from '../contacts.json';
import Detail from "./Detail";


const Contacts = () => {
    const [select, setSelect] = useState();
    const [inputState, setInputState] = useState(false);
    const [data, setData] = useState(contacts);

    const selectContact = (id) => {
        console.log(id)
        setSelect(id)
    }
    const text = useRef('');
    const onInput = () => {
        if (text.current.value === "") {
            setInputState(false);
            setData(contacts)
            setSelect(-1)
        } else {
            setInputState(true);
            let tempData = data.filter(d => d.name.toLowerCase().indexOf(text.current.value) > -1);
            if (tempData.length === 0) {
                setSelect(-1)
            }
            setData(tempData)
        }
    }

    return (
        <div className="contact-wrap">
            <div className="col left">
                <div className="search-box">
                    <input type="text" className="inp-sch" ref={text} placeholder="검색어를 입력하세요."
                           onChange={onInput}/>
                </div>
                <div className="contact-list">
                    <ul>
                        {!inputState && contacts.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <button type="button" onClick={e => selectContact(contact.id)}>{contact.name}</button>
                                </li>)
                        })}

                        {inputState && data.map((contact, index) => {
                                return (
                                    <li key={index}>
                                        <button type="button"
                                                onClick={e => selectContact(contact.id)}>{contact.name}</button>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>
            <Detail selected={select}/>
        </div>
    )
}
export default Contacts