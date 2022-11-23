//make sure to add the inputs and labels correctly before adding the functionality

//This function takes care of signing up a user to use the app.
function singup () {
    return (
        <div className="signup">
            
            <h1>Sign Up</h1>

            <div className="form">
                <label>Name</label>
                <br/>
                <input></input>

                <br/>

                <label>Username</label>
                <br/>
                <input></input>

                <br/>

                <label>Password</label>
                <br/>
                <input></input>
                
                <br />

                <button className="submit-sign-up">Submit</button>
            </div>

        </div>
    )
}

export default singup;