import { useState } from "react"

const UpdateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")
  //   const [error, setError] = useState(false)

  const updateProduct = (e) => {
    e.preventDefault()

    console.log({ name, price, category, company })
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
