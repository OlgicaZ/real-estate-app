import './Buy.scss';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import FilterResults from "../../components/FilterResults/FilterResults";
import Filters from "../../components/Filters/Filters";
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Buy() {
    return (
        <>
            <Header />
            <main className="buy-home">
                <SearchBar className='buy-home__search' />
                <Filters className='buy-home__filters'/>
                <FilterResults className='buy-home__results'/>
            </main>
        </>
    )
}