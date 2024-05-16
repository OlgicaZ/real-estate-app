import './MapPropertyCard.scss';

import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { PiBathtub } from "react-icons/pi";

export default function MapPropertyCard({ selectedMarker }) {
    return (
        <div className="map-card">
            <img className="map-card__image" src='https://d25fhp1qfwqa2h.cloudfront.net/9312166729_auto_650'  alt='selected property' />
            <span className="map-card__price">${new Intl.NumberFormat().format(selectedMarker.list_price)}</span>
            <div className='map-card__details-container'>
                <div className="map-card__details">
                    <IoBedOutline />
                    {selectedMarker.description.beds}
                </div>
                <div className="map-card__details">
                    <PiBathtub />
                    {selectedMarker.description.baths}
                </div>
                <div className="map-card__details">
                    <SlSizeFullscreen />
                    {selectedMarker.description.sqft} sq ft
                </div>
            </div>
            <span className="map-card__address">{selectedMarker.location.address.line}</span>
        </div>
    )
}