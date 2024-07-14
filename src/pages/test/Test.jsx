import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux_storage/userSlice';

const Test = () => {

    // Redux actions
    const dispatch = useDispatch();
    useEffect(() => {

        const getUsers = async () => {
            const response = await axios.get('http://localhost:5000/users')
            console.log(response)

            // Add user, dispatching
            dispatch(addUser(response.data))
        }

        // calling function
        getUsers()


    }, [])


    return (
        <>
            <h2>Test page!</h2>

        </>
    )
}

export default Test
