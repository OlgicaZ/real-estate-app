import './Filters.scss';

import { HiChevronDown } from "react-icons/hi2";
import { propertyType, priceRange, bedrooms, bathrooms } from '../../data/data';

import { useState } from 'react';

export default function Filters({ className, updateData, updateFilters, selectedFilters }) {

    const [visibleSections, setVisibleSections] = useState({
        propertyType: true,
        priceRange: true,
        bedrooms: true,
        bathrooms: true,
    });

    const toggleSection = (section) => {
        setVisibleSections((prevVisibleSections) => ({
            ...prevVisibleSections,
            [section]: !prevVisibleSections[section]
        }));
    };

    return (
        <section className={`${className} filters`}>
            <h2>Filter By</h2>
            <div className='filters__filter-type'>
                <div
                    className='filters__heading-container'
                    onClick={() => toggleSection('propertyType')}
                    aria-expanded={visibleSections.propertyType}
                >
                    <h3>Property type</h3>
                    <HiChevronDown className={`${visibleSections.propertyType ? 'open' : 'closed'}`} />
                </div>
                <div className={`filters__filters-container ${visibleSections.propertyType ? '' : 'close'}`}>
                    {
                        propertyType.map((type) => (
                            <label key={type.id}>
                                <input 
                                    type='checkbox' 
                                    name='property-type' 
                                    onChange={() => updateFilters('propertyType', type.name)}
                                    checked={selectedFilters.propertyType.has(type.name) || false}
                                />
                                {type.name}
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className='filters__filter-type'>
                <div
                    className='filters__heading-container'
                    onClick={() => toggleSection('priceRange')}
                    aria-expanded={visibleSections.priceRange}
                >
                    <h3>Price Range</h3>
                    <HiChevronDown className={`${visibleSections.priceRange ? 'open' : 'closed'}`} />
                </div>
                <div className={`filters__filters-container ${visibleSections.priceRange ? '' : 'close'}`}>
                    {
                        priceRange.map((price) => (
                            <label key={price.id}>
                                <input 
                                    type='checkbox' 
                                    name='price-range' 
                                    onChange={() => updateFilters('priceRange', price.range)}
                                    checked={selectedFilters.priceRange.has(price.range) || false}
                                />
                                {price.range}
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className='filters__filter-type'>
                <div
                    className='filters__heading-container'
                    onClick={() => toggleSection('bedrooms')}
                    aria-expanded={visibleSections.priceRange}
                >
                    <h3>Bedrooms</h3>
                    <HiChevronDown className={`${visibleSections.bedrooms ? 'open' : 'closed'}`} />
                </div>
                <div className={`filters__filters-container ${visibleSections.bedrooms ? '' : 'close'}`}>
                    {
                        bedrooms.map((item) => (
                            <label key={item.id}>
                                <input 
                                    type='checkbox' 
                                    name='bedrooms' 
                                    onChange={() => updateFilters('numberBedrooms', item.numberBedrooms)} 
                                    checked={selectedFilters.numberBedrooms.has(item.numberBedrooms) || false}
                                />
                                {item.numberBedrooms}
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className='filters__filter-type'>
                <div
                    className='filters__heading-container'
                    onClick={() => toggleSection('bathrooms')}
                    aria-expanded={visibleSections.bathrooms}
                >
                    <h3>Bathrooms</h3>
                    <HiChevronDown className={`${visibleSections.bathrooms ? 'open' : 'closed'}`} />
                </div>
                <div className={`filters__filters-container ${visibleSections.bathrooms ? '' : 'close'}`}>
                    {
                        bathrooms.map((item) => (
                            <label key={item.id}>
                                <input 
                                    type='checkbox' 
                                    name='bathrooms' 
                                    onChange={() => updateFilters('numberBathrooms', item.numberBathrooms)}
                                    checked={selectedFilters.numberBathrooms.has(item.numberBathrooms) || false}
                                />
                                {item.numberBathrooms}
                            </label>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}