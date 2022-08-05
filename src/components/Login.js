import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    console.log({ email, password })
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
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="button" type="submit">
        Login
      </button>
    </form>
  )
}

export default Login
