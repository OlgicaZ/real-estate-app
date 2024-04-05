import './Buy.scss';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import FilterResults from "../../components/FilterResults/FilterResults";
import Filters from "../../components/Filters/Filters";
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';

export default function Buy() {

    const [selectedView, setSelectedView] = useState('grid');

    const toggleView= (view) => {setSelectedView(view)}

    return (
        <>
            <Header />
            <main className="buy-home">
                <SearchBar 
                    className='buy-home__search' 
                    selectedView={selectedView}
                    toggleView={toggleView}
                />
                <Filters className='buy-home__filters'/>
                <FilterResults className='buy-home__results'/>
            </main>
        </>
    )
}