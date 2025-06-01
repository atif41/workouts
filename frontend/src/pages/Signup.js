import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        
      />
      
      <p> password must cotain the following:</p>
      <div className="newpass">
      <ul>
        <p>
         <li> Must be at least 10 characters</li>
        <li> at least 1 UPPERcase letter</li>
        <li> at least 1 LOWERcase letter</li>
        <li> at least 1 SPECIAL character(ex: !@#$?)</li>
        </p>
      </ul>
      </div>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup