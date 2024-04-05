import './SearchBar.scss';

import { RiSearch2Line } from "react-icons/ri";

export default function SearchBar({ className }) {
    return (
        <div className={className}>
            <div className='buy-home__search-container'>
                <form>
                    <input
                        type='text'
                        name='search-bar'
                        placeholder='Search by city, neighborhood, or ZIP code'
                    />
                    <button className='buy-home__search-button'>
                        <RiSearch2Line />
                    </button>
                </form>
            </div>

            <div className='buy-home__search-view-container'>

            </div>
        </div>
    )
}