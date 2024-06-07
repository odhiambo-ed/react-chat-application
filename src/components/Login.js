import React, { useState } from 'react'
import axios from 'axios'

const projectID = '0c033c07-4731-40fc-bef6-b961ecd3376f'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
        } catch (error) {
            setError('Oops, incorrect credentials.')
        }
    }
  return (
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form>
            <div className="field">
              <input
                type="text"
                value=""
                className="input"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                value=""
                className="input"
                          placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field">
              <button className="button" onSubmit={handleSubmit}>
                <span>Start chatting</span>
                      </button>
                      <h2 className="error">{error}</h2>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login