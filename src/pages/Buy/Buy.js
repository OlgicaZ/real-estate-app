import './Buy.scss';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import FilterResults from "../../components/FilterResults/FilterResults";
import Filters from "../../components/Filters/Filters";
import SearchBar from '../../components/SearchBar/SearchBar';
import jsonData from './../../data/for-sale-listings.json';

import { useState } from 'react';

export default function Buy() {

    const [selectedView, setSelectedView] = useState('grid');
    const toggleView = (view) => { setSelectedView(view) };

    const [data, setData] = useState(jsonData.home_search.results);
    const updateData = (newData) => { setData(newData) };

    const [selectedFilters, setSelectedFilters] = useState({
        propertyType: new Set(),
        priceRange: new Set(),
        numberBedrooms: new Set(),
        numberBathrooms: new Set()
    });
    
    const updateFilters = (category, filter) => {

        setSelectedFilters((prevFilters) => {
            let updatedFilters = new Set(prevFilters[category]);

            if (updatedFilters.has(filter)) {
                updatedFilters.delete(filter);
            } else {
                updatedFilters.add(filter);
            }

            return { ...prevFilters, [category]: updatedFilters}
        })
    }

    const clearFilters = () => {
        setSelectedFilters({
            propertyType: new Set(),
            priceRange: new Set(),
            numberBedrooms: new Set(),
            numberBathrooms: new Set()
        });
    }

    // console.log(data);

    return (
        <>
            <Header />
            <main className="buy-home">
                <SearchBar
                    className='buy-home__search'
                    selectedView={selectedView}
                    toggleView={toggleView}
                />
                <Filters
                    className='buy-home__filters'
                    updateData={updateData}
                    updateFilters={updateFilters}
                    selectedFilters={selectedFilters}
                />
                <FilterResults
                    className='buy-home__results'
                    selectedView={selectedView}
                    data={data}
                    selectedFilters={selectedFilters}
                    clearFilters={clearFilters}
                />
            </main>
            <Footer />
            <Contact />
        </>
    )
}