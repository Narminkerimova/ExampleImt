import { Link } from "react-router";
function Navbar() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/adminadd">Admin Add</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/wishlist">Wish List</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar