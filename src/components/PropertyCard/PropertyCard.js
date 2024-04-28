import './PropertyCard.scss';

import { IoLocationOutline, IoCameraOutline, IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";


export default function ProperyCard({ property, selectedView }) {

    const message = `Hello, I'm interested in your listing at ${property.location.address.line}.`;
    const encodedMessage = encodeURIComponent(message);

    return (
        <div className={`${selectedView} listings-card`}>
            <div className='listings-card__image-container'>
                {/* <img src={property.primary_photo.href} alt='property'/>  */}
                <img src='https://d25fhp1qfwqa2h.cloudfront.net/9312166729_auto_650' alt='property' />
                <div className='listings-card__address'>
                    <IoLocationOutline />
                    {property.location.address.line}
                </div>
                <div className='listings-card__number-photos'>
                    <IoCameraOutline />
                    {property.photos.length}
                </div>
            </div>

            <div className='listings-card__details-container'>
                <h3>$ {new Intl.NumberFormat().format(property.list_price)}</h3>
                <div className='listings-card__description'>
                    <div className='listings-card__details'>
                        <IoBedOutline />
                        {property.description.beds}
                    </div>
                    <div className='listings-card__details'>
                        <PiBathtub />
                        {property.description.baths}
                    </div>
                    <div className='listings-card__details'>
                        <SlSizeFullscreen />
                        {property.description.sqft} sq ft
                    </div>
                </div>
                <div className='listings-card__button-container'>
                    <a href={`sms:+13053435065?body=${encodedMessage}`}>Inquire</a>
                </div>
            </div>
        </div>
    )
}