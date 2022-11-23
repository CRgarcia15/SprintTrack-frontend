import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

//This function takes care of creating an user to use the app.
function singup () {
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const redirect = useNavigate

    const handleSubmit = (e) => {
        e.prenventDefault()
        const user = { name, username, password}

        fetch('http://localhost:7000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('New user created')
        })
        redirect('/userHome')
    }

    return (
        <div className="signup">
            
            <h1>Sign Up</h1>

            <form className="create-user">
                <label className="login-lable" htmlFor="name">Name</label>
                <br/>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required></input>

                <br/>

                <label className="login-lable" htmlFor="username">Username</label>
                <br/>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>

                <br/>

                <label className="login-lable" htmlFor="password">Password</label>
                <br/>
                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                
                <br />

                <button className="submit-sign-up" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default singup;