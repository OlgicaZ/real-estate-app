import { useState } from 'react';
import ProperyCard from '../PropertyCard/PropertyCard';
import './FilterResults.scss';
import { Pagination } from "antd";

export default function FilterResults({ className, selectedView, data }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    
    const numberPages = data.length;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, Math.min(indexOfLastItem, data.length));

    const handlePagination = (page, pageSize) => {
        setCurrentPage(page);
        setItemsPerPage(pageSize);
    }
    
    return (
        <section className={`${className} listings`}>
            <div className='listings__header'>
                {data.length} (Houses for sale)
            </div>
            <div className={`listings__container listings__container--${selectedView}`}>
                {
                    currentItems.map((property, index) => (
                        <ProperyCard key={index} property={property}/>
                    ))
                }
            </div>
            <div className='listings__pagination'>
            <Pagination 
                current={1} 
                pageSize={itemsPerPage} 
                onChange={handlePagination}
                total={numberPages} 
            />
            </div>
        </section>
    )
}