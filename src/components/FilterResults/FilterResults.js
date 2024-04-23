import { useEffect, useState } from 'react';
import ProperyCard from '../PropertyCard/PropertyCard';
import { GrClear } from "react-icons/gr";

import './FilterResults.scss';
import { Pagination } from "antd";



export default function FilterResults({ className, selectedView, data, clearFilters, selectedFilters }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const numberPages = data.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, Math.min(indexOfLastItem, data.length));

    const [displayFilters, setDisplayFilters] = useState(Object.values(selectedFilters).flatMap(set => Array.from(set))); 

    useEffect(() => {
        setDisplayFilters(Object.values(selectedFilters).flatMap(set => Array.from(set)));
    }, [selectedFilters]); 

    const handlePagination = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    }

    return (
        <section className={`${className} listings`}>
            <div className='listings__header'>
                <span className='listings__houses-for-sale'>
                    <b>{data.length}</b> Houses for sale
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
            <div className={`listings__container listings__container--${selectedView}`}>
                {
                    currentItems.map((property, index) => (
                        <ProperyCard key={index} property={property} />
                    ))
                }
            </div>
            <div className='listings__pagination'>
                <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    onChange={handlePagination}
                    total={numberPages}
                />
            </div>
        </section>
    )
}