import './PropertyCard.scss';

import { IoLocationOutline, IoCameraOutline, IoBedOutline } from "react-icons/io5";
import { TbCarGarage } from "react-icons/tb";

import { PiBathtub } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";


export default function ProperyCard({ property, selectedView }) {

    const message = `Hello, I'm interested in your listing at ${property.location.address.line}.`;
    const encodedMessage = encodeURIComponent(message);

    return (
        <div className={`listings-card--${selectedView}`}>
            <div className={`listings-card--${selectedView}__image-container`}>
                {/* <img src={property.primary_photo.href} alt='property'/>  */}
                <img src='https://d25fhp1qfwqa2h.cloudfront.net/9312166729_auto_650' alt='property' />
                <div className={`listings-card--${selectedView}__address`}>
                    <IoLocationOutline />
                    {property.location.address.line}
                </div>
                <div className={`listings-card--${selectedView}__number-photos`}>
                    <IoCameraOutline />
                    {property.photos.length}
                </div>
            </div>

            <div className={`listings-card--${selectedView}__details-container`}>
                <h3>$ {new Intl.NumberFormat().format(property.list_price)}</h3>
                {
                    (selectedView === 'list') && (
                        <div className={`listings-card--${selectedView}__adtl-details`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    )
                }
                <div className={`listings-card--${selectedView}__description`}>
                    <div className={`listings-card--${selectedView}__details`}>
                        <IoBedOutline />
                        {property.description.beds}
                    </div>
                    <div className={`listings-card--${selectedView}__details`}>
                        <PiBathtub />
                        {property.description.baths}
                    </div>
                    <div className={`listings-card--${selectedView}__details`}>
                        <SlSizeFullscreen />
                        {property.description.sqft} sq ft
                    </div>
                    {
                        (selectedView === 'list' && property.description.garage) && (
                            <div className={`listings-card--${selectedView}__details`}>
                                <TbCarGarage />
                                {property.description.garage}
                            </div>
                        )
                    }
                </div>
                <div className={`listings-card--${selectedView}__button-container`}>
                    <a href={`sms:+13053435065?body=${encodedMessage}`}>Inquire</a>
                </div>
            </div>
        </div>
    )
}