import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Ecommerce</h3>
      <div>
        <button>Albums</button>
        <button>Lightsticks</button>
        <button>Season Greetings</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
