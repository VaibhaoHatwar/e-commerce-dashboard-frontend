import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SignUp from "./components/SignUp"
import PrivateComponent from "./components/PrivateComponent"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product Listing Component</h1>} />
            <Route path="/add" element={<h1>Add Product Component</h1>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
export default App
