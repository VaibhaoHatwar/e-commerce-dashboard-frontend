import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")

    if (auth) {
      navigate("/")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const collectData = async (e) => {
    e.preventDefault()

    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    result = await result.json() // <-- to convert readable stream to json
    localStorage.setItem("user", JSON.stringify(result.result))
    localStorage.setItem("token", JSON.stringify(result.auth))

    setName("")
    setEmail("")
    setPassword("")

    if (result) {
      navigate("/")
    }
  }

  return (
    <form onSubmit={collectData} className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="button" type="submit">
        Sign Up
      </button>
    </form>
  )
}

export default SignUp
