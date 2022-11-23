
function login () {
    
    return (
        <div className="login">

            <h1>Sign-In</h1>

            <div className="form">
                <label>Username:</label>
                <br/>
                <input></input>

                <br/>
                <label>Password:</label>

                <br/>

                <input></input>

                <br/>

                <button className="submit-sign-up">Sign-in</button>
                
                <br/>
        
                <p>If you don't have an account with us please <a href="/signup" className="signUpRedirect">Sing up</a></p>
            </div>
        </div>
    )
}

export default login