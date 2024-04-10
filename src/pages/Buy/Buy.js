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
    const [data, setData] = useState(jsonData.home_search.results)

    const toggleView = (view) => {setSelectedView(view)}
    const updateData = (newData) => (setData(newData));

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
                />
                <FilterResults 
                    className='buy-home__results'
                    selectedView={selectedView}
                    data={data}
                />
            </main>
        </>
    )
}