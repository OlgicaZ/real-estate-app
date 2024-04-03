import { useState } from 'react';
import './Contact.scss';

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

export default function Contact() {

    const [contactModal, setContactModal] = useState(false);

    const toggleModal = () => { setContactModal(!contactModal) }

    if (!contactModal) {
        return (
            <div className='contact contact--closed' onClick={toggleModal}>
                <BsFillTelephoneFill />
            </div>
        )
    } else {
        return (
            <div className='contact contact--open' onClick={toggleModal}>
                <div className='contact--open__call'>
                    <div>
                        <BsFillTelephoneFill />
                        <a href='tel:+13053435065'>Call</a>
                    </div>
                </div>
                <div href='sms:+13053435065' className='contact--open__text'>
                    <div>
                        <AiFillMessage />
                        <a href='tel:+13053435065'>Text</a>
                    </div>
                </div>
            </div>
        )
    }
}