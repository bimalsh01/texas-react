import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerApi } from '../../api/Api'
import Navbar from '../../components/Navbar'


const Register = () => {

  // making useState for each input
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // state for error
  const [firstnameError, setFirstnameError] = useState('')
  const [lastnameError, setLastnameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Validation function
  const Validation = () => {
    var isValid = true;

    if (firstname === '') {
      setFirstnameError('Please enter your firstname')
      isValid = false
    }

    if (lastname === '') {
      setLastnameError('Please enter your lastname')
      isValid = false
    }

    if (email === '') {
      setEmailError('Please enter your email')
      isValid = false
    }

    if (password === '') {
      setPasswordError('Please enter your password')
      isValid = false
    }

    // password 6 characters
    if (password.length < 6) {
      setPasswordError('Password must be 6 characters')
      isValid = false
    }

    return isValid
  }

  // Submit function
  const handleRegister = (e) => {
    e.preventDefault()

    // validation
    const isValid = Validation()
    if (!isValid) {
      return // stopping the process
    }

    // now, form is valid
    // data - JSON 
    // making json | Key : Value | Key should be match to db
    const data = {
      "firstname" : firstname,
      "lastname"  : lastname,
      "email" : email,
      "password" : password
    }

    // Calling API
    registerApi(data).then((response) => {
      console.log(response)

      if(response.status === 201){
        alert('User Created Successfully!')
      }

    }).catch((error) => {
      console.log(error)
      alert("Server Error!")
    })


  }




  return (
    <div className='container mt-5'>
      <h3 className='text-center'>Create your <span className='text-danger'>Account!</span></h3>
      <div className='row justify-content-center'>
        <form className='col-12 col-md-8 col-lg-6 col-xl-4 shadow p-3 rounded'>
          <label htmlFor="firstname">Firstname</label>
          <input onChange={(e) => setFirstname(e.target.value)} type="text" className='form-control' placeholder='Enter your firstname' />

          {
            firstnameError && <p className='text-danger'>{firstnameError}</p>
          }

          <label className='mt-2' htmlFor="lastname">Lastname</label>
          <input onChange={(e) => setLastname(e.target.value)} type="text" className='form-control' placeholder='Enter your lastname' />

          {
            lastnameError && <p className='text-danger'>{lastnameError}</p>
          }

          {/* Task : Make input for email and password */}
          <label className='mt-2' htmlFor="email">Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' placeholder='Enter your email' />

          {
            emailError && <p className='text-danger'>{emailError}</p>
          }

          <label className='mt-2' htmlFor="email">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' placeholder='Enter your password' />

          {
            passwordError && <p className='text-danger'>{passwordError}</p>
          }

          <button onClick={handleRegister} className='btn btn-dark mt-3 w-100'>Submit</button>

          <Link to={'/login'}>Already have an Account? Login here</Link>

        </form>

      </div>

    </div>
  )
}

export default Register
