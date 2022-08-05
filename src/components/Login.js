import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    result = await result.json()
    console.log(result)

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result))
      setEmail("")
      setPassword("")
      navigate("/")
    } else {
      alert("Please, enter corect details")
    }
  }

  return (
    <form onSubmit={handleLogin} className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="button" type="submit">
        Login
      </button>
    </form>
  )
}

export default Login
