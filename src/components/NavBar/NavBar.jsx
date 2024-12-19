import CartWidget from "./CartWidget";
import { BsBox } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <button onClick={() => navigate(-1)}>Go back</button>
      <ul className="categories">
        <NavLink
          to="/category/albums"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Albums
        </NavLink>
        <NavLink
          to="/category/lightsticks"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Lightsticks
        </NavLink>
        <NavLink
          to="/category/seasongreetings"
          className={({ isActive }) =>
            isActive ? "category-active" : "category"
          }
        >
          Season Greetings
        </NavLink>
      </ul>
      <Link to="/" className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand">K-Pop Box</p>
      </Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
