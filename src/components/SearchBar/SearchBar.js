import './SearchBar.scss';

import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlMap } from "react-icons/sl";

export default function SearchBar({ className, selectedView, toggleView }) {
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

            <div className='buy-home__search-view'>
                <div className='buy-home__search-view-container'>
                    <div
                        className={`${(selectedView === 'grid') ? 'selected' : ''}`}
                        onClick={() => toggleView('grid')}
                    >
                        <HiOutlineSquares2X2 />
                    </div>
                    <div
                        className={`${(selectedView === 'list') ? 'selected' : ''}`}
                        onClick={() => toggleView('list')}
                    >
                        <RxHamburgerMenu />
                    </div>
                    <div
                        className={`${(selectedView === 'map') ? 'selected' : ''}`}
                        onClick={() => toggleView('map')}
                    >
                        <SlMap />
                    </div>
                </div>
            </div>
        </div>
    )
}