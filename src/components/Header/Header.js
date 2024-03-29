import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const navOptions = [
    { id: 0, name: "Home", path: "" },
    { id: 1, name: "Home Valuation", path: "valuation" },
    { id: 2, name: "Sell", path: "sell" },
    { id: 3, name: "Buy", path: "buy" },
    { id: 4, name: "Community Guide", path: "guide" },
    { id: 5, name: "Blog", path: "blog" },
    { id: 6, name: "Career Page", path: "career" },
    { id: 7, name: "About Us", path: "about" },
    { id: 8, name: "Events", path: "events" },
  ];

  return (
    <div className="header">
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
    </div>
  );
}
