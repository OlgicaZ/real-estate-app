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

    const [selectedFilters, setSelectedFilters] = useState([]);
    const updateFilters = (value) => {
        let updatedArray;
    
        if (selectedFilters.includes(value)) {
            updatedArray = selectedFilters.filter(item => item !== value);
        } else {
            updatedArray = [...selectedFilters, value];
        }
    
        setSelectedFilters(updatedArray);
    };

    console.log(data);

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
                />
                <FilterResults
                    className='buy-home__results'
                    selectedView={selectedView}
                    data={data}
                    selectedFilters={selectedFilters}
                />
            </main>
            <Footer />
            <Contact />
        </>
    )
}