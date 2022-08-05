import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem("user")

  const logOut = () => {
    localStorage.clear()
    navigate("/signup")
  }

  return (
    <nav>
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
        {auth ? (
          <li>
            <Link to="/signup" onClick={logOut}>
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
