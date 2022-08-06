import { useState } from "react"

const AddProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")

  const addProduct = async (e) => {
    e.preventDefault()

    const userId = JSON.parse(localStorage.getItem("user"))._id

    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ userId, name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    result = await result.json()
    console.log(result)
  }

  return (
    <div className="product">
      <h1>Add Product</h1>
      <form onSubmit={addProduct}>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddProduct
