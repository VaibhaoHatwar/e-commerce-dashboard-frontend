import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json()
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const updateProduct = async (e) => {
    e.preventDefault()

    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    result = await result.json()
    navigate("/")
  }

  return (
    <div className="product">
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="inputBox"
          type="text"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="inputBox"
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="inputBox"
          type="text"
          placeholder="Enter product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button className="button" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct
