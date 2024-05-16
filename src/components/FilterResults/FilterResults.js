import './FilterResults.scss';

import { useEffect, useState } from 'react';
import ProperyCard from '../PropertyCard/PropertyCard';
import { GrClear } from "react-icons/gr";
import { Pagination } from "antd";
import { GoogleMap, InfoWindow, LoadScriptNext, Marker } from '@react-google-maps/api';
import MapPropertyCard from '../MapPropertyCard/MapPropertyCard';

export default function FilterResults({ className, selectedView, data, clearFilters, selectedFilters, numberListings }) {

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const numberEntries = data.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, Math.min(indexOfLastItem, data.length));

    const handlePagination = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    }

    //selected filters
    const [displayFilters, setDisplayFilters] = useState(Object.values(selectedFilters).flatMap(set => Array.from(set)));

    useEffect(() => {
        setDisplayFilters(Object.values(selectedFilters).flatMap(set => Array.from(set)));
    }, [selectedFilters]);

    //map
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    let address = '33137';

    const [center, setCenter] = useState({});
    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerClick = (marker) => setSelectedMarker(marker);

    useEffect(() => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        const fetchCoordinates = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json()

                if (data.status === 'OK') {
                    const location = data.results[0].geometry.location;
                    setCenter(location);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchCoordinates();

    }, [address, apiKey]);

    console.log(selectedMarker);

    return (
        <section className={`${className} listings`}>
            <div className='listings__header'>
                <span className='listings__houses-for-sale'>
                    <b>{numberListings}</b> Houses for sale
                </span>

                <div className='listings__selected-filters-container'>
                    {
                        displayFilters && displayFilters.length > 3 ? (
                            <>
                                {
                                    displayFilters.slice(0, 3).map((item, index) => (
                                        <span key={index} className='listings__selected-filters'>{item}</span>
                                    ))
                                }
                                <span className='listings__selected-filters'>{`( ${displayFilters.length - 3} ) more`}</span>
                            </>
                        ) : (
                            displayFilters.map((item, index) => (
                                <span key={index} className='listings__selected-filters'>{item}</span>
                            ))
                        )
                    }
                </div>

                <div
                    className='listings__clear-button'
                    onClick={() => clearFilters()}
                >
                    Clear Filters
                    <GrClear />
                </div>
            </div>
            {
                (selectedView === 'grid' || selectedView === 'list') ? (
                    <>
                        <div className={`listings__container listings__container--${selectedView}`}>
                            {
                                currentItems.map((property, index) => (
                                    <ProperyCard key={index} property={property} selectedView={selectedView} />
                                ))
                            }
                        </div>
                        <div className='listings__pagination'>
                            <Pagination
                                current={currentPage}
                                pageSize={itemsPerPage}
                                onChange={handlePagination}
                                total={numberEntries}
                            />
                        </div>
                    </>
                ) : (
                    <LoadScriptNext
                        googleMapsApiKey={apiKey} // Ensure your API key is stored securely
                    >
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={center}
                            zoom={12}
                        >
                            {
                                data.map((entry, index) => (
                                    entry.location.address.coordinate &&
                                    <Marker
                                        key={index}
                                        position={{ lat: entry.location.address.coordinate.lat, lng: entry.location.address.coordinate.lon }}
                                        onClick={() => handleMarkerClick(entry)}
                                    >
                                        {
                                            (selectedMarker === entry) && (
                                                <InfoWindow
                                                    position={{ lat: entry.location.address.coordinate.lat, lng: entry.location.address.coordinate.lon }}
                                                    onCloseClick={() => setSelectedMarker(null)}
                                                >
                                                    <MapPropertyCard selectedMarker={selectedMarker} />
                                                </InfoWindow>
                                            )
                                        }
                                    </Marker>
                                ))
                            }
                        </GoogleMap>
                    </LoadScriptNext>
                )
            }
        </section>
    )
}   