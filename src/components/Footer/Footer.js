import './Footer.scss';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import { navOptions } from '../../data/data';
import { officeHours } from '../../data/data';
import { NavLink } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import PrivacyModal from '../PrivacyModal/PrivacyModal';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: icon,
    iconRetinaUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

export default function Footer() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {setShowModal(!showModal);}

    const position = [25.80517480280579, -80.18918292051922];

    return (
        <footer className='footer'>
            <section>
                <img className='footer__logo' src='https://images.squarespace-cdn.com/content/v1/59d1cb52cd39c3d497f3ccd8/1539195280622-7KNATKN76QUL9DPA7BJG/1KellerWilliams_Infor_WeAre1KW_RGB.png?format=2500w' alt='KW logo' />
                <span>
                    ©Keller Williams Realty     <br />
                    Miami Lakes 2024            <br />
                    All right reserved          <br />
                </span>
                <span onClick={toggleModal} className='footer__privacy'>Prvacy Policy</span>
            </section>
            <section>
                <h2>Services</h2>
                <ul>
                    {navOptions.map((item) => (
                        <li key={item.id}>
                            <NavLink to={`/${item.path}`}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Office Hours</h2>
                <ul>
                    {
                        officeHours.map((item, index) => (
                            <li key={index}>
                                {item.day}: {item.hours}
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <address>
                    <div className='footer__address'>
                        <FaLocationDot />
                        <div>
                            <span>
                                Keller Williams Realty Miami Lakes <br />
                                14261 Commerce Way Suite 102       <br />
                                Miami Lakes, FL, 33016
                            </span>
                        </div>
                    </div>
                    <div className='footer__telephone'>
                        <BsFillTelephoneFill />
                        <a href="tel:+15613325000">+1 (561) 332 - 5000</a>
                    </div>
                </address>
                <MapContainer center={position} zoom={17}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Find us here
                        </Popup>
                    </Marker>
                </MapContainer>
            </section>
            <PrivacyModal showModal={showModal} toggleModal={toggleModal} />
        </footer>
    )
}