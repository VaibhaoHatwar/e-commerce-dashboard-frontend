import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products")
    result = await result.json()
    setProducts(result)
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    })
    result = await result.json()
    if (result) {
      alert("record is deleted")
    }
  }

  const searchHandle = async (e) => {
    let key = e.target.value
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`)
      result = await result.json()
      if (result) {
        setProducts(result)
      } else {
        getProducts()
      }
    }
  }

  return (
    <div className="product-list">
      <h1>Products List</h1>
      <input
        className="search-product-bar"
        type="text"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S. No.</li>
        <li>Name</li>
        <li>Price ($)</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>
              <button type="button" onClick={() => deleteProduct(item._id)}>
                delete
              </button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Results Found</h1>
      )}
    </div>
  )
}

export default ProductList
