import { useState } from 'react';
import ProperyCard from '../PropertyCard/PropertyCard';
import './FilterResults.scss';
import { Pagination } from "antd";

export default function FilterResults({ className, selectedView, data, selectedFilters }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const numberPages = data.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, Math.min(indexOfLastItem, data.length));

    console.log(currentItems);

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
                        selectedFilters && selectedFilters.length > 3 ? (
                            <>
                                {
                                    selectedFilters.slice(0, 3).map((item, index) => (
                                        <span key={index} className='listings__selected-filters'>{item}</span>
                                    ))
                                }
                                <span>{`( ${selectedFilters.length - 3} ) more`}</span>
                            </>
                        ) : (
                            selectedFilters.map((item, index) => (
                                <span key={index} className='listings__selected-filters'>{item}</span>
                            ))
                        )
                    }
                </div>

                <div className='listings__clear-button'>
                    Clear Filters
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