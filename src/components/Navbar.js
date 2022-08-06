import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/ball-logo.png"

const Navbar = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem("user")

  const logOut = () => {
    localStorage.clear()
    navigate("/signup")
  }

  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup" onClick={logOut}>
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
