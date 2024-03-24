import { NavLink } from 'react-router-dom';
import  './Header.scss';

export default function Header() {

    const navOptions = [
        {id: 0, name: 'HOME', path: ''}, 
        {id: 1, name: 'HOME VALUATION', path: 'valuation'}, 
        {id: 2, name: 'SELL', path: 'sell'},
        {id: 3, name: 'BUY', path: 'buy'},
        {id: 4, name: 'COMMUNITY GUIDE', path: 'guide'},
        {id: 5, name: 'BLOG', path: 'blog'},
        {id: 6, name: 'CAREER PAGE', path: 'career'},
        {id: 7, name: 'ABOUT US', path: 'about'},
        {id: 8, name: 'EVENTS', path: 'events'},
    ];

    return (
        <div className="header">
            <div className='header__logo'>
                <img src='https://images.squarespace-cdn.com/content/v1/59d1cb52cd39c3d497f3ccd8/0cc4af28-9c27-4a76-a878-bfcdafab75ef/New%2BAVHE_Logo-1.png?format=1500w' alt='logo'/>
            </div>
            <nav className='header__nav'>
                <ul>
                    {
                        navOptions.map((item) => (
                                <li className='header__list-item' key={item.id}>
                                    <NavLink 
                                        to={`/${item.path}`}
                                        activeClassName='active'
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}