// import
import React, {useState} from "react";
import './Login.css'
import { Link } from "react-router-dom";
import { loginApi } from "../../api/Api";
import Navbar from "../../components/Navbar";

// make a arrow function (Filename)
const Login = () => {
    
    // Space for out logic

    // Making state for email and password
    // for storing what we type
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // State, for storing error message
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // Storing changes to above variables
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    // for password
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    // Form Validation
    const validation = () => {
        // make a state, that track if form is valid
        let isValid =  true;

        // Check email is empty
        if(email === ''){
            setEmailError('Email is Required!')
            isValid = false;
        }

        // Check password
        if(password === ''){
            setPasswordError('Password is Required!')
            isValid = false;
        }

        return isValid;
    }

    // function for button
    const handleClickLogin = (e) => {
        
        // if button is clicked, dont reload
        e.preventDefault()

        // validation
        if(!validation()){
            return // Stopping the process
        }

        // Open dashboard (ONLY FOR TESTING)
        loginApi(email).then((response) => {
            if(response.data.length === 0){
                alert('User Not Found!')
            }

            else if (response.data[0].password !== password){
                alert("Incorrect Password")
            } else{
                alert("Login Successful!")
            }

        }).catch((error) => {
                console.log(error)
                alert('Server Error!')
        })

    }

    
    return (
        <div className="login-container">
            

            <h3>Login to your account!</h3>
            
            <form className="login-form">
                <label htmlFor="email">Email Address</label>
                <input onChange={handleChangeEmail} type="email" placeholder="Enter your email!" />
                
                {/* Space for email error message */}
                {
                    emailError && <p className="error-text">{emailError}</p>
                }

                
                <label htmlFor="password">Password</label>
                <input onChange={handleChangePassword} type="password" placeholder="Enter your password"  />
                
                {/* Space for password error message */}
                {
                    passwordError && <p className="error-text">{passwordError}</p>
                }

                <p>Forgot your password?</p>
                <button onClick={handleClickLogin} className="login-btn">Login</button>
                
                <Link to={'/register'}>Create your account</Link>

            </form>

        </div>
    )
}

// export
export default Login

// What we did
// 1. Login page banayo
// 2. Implemented CSS
// 3. Make a state for temporary saving (Input, Error)
// 4. Function-for changing state
// 5. Assigned to respective input (onChange)
// 6. validation (Input are empty?, Setting error)
// 7. Function for button (Prevent page form reload)
// 8. Function - Validation (Form)
// 9. Botton - (onClick- Assigned)

// 10. Task - Make same for Register page
// firstname, lastname, email, phone, password and profile