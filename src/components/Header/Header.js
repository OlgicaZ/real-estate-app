import { NavLink } from "react-router-dom";
import { navOptions } from "../../data/data";
import "./Header.scss";

export default function Header() {

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://images.squarespace-cdn.com/content/v1/59d1cb52cd39c3d497f3ccd8/0cc4af28-9c27-4a76-a878-bfcdafab75ef/New%2BAVHE_Logo-1.png?format=1500w"
          alt="logo"
        />
      </div>
      <div className="header__nav">
        <ul>
          {navOptions.map((item) => (
            <li className="header__list-item" key={item.id}>
              <NavLink to={`/${item.path}`}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
