import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../api/Api'
import { FaUserCircle } from "react-icons/fa";

const Search = () => {

    const [searhQuery, setSearchQuery] = useState('')

    // State for All data and seaeched data
    const [users, setUsers] = useState([])
    const [searchresult, setSearchResult] = useState([])

    // data fetch
    useEffect(() => {
        fetchUsers().then((res) => {

            // adding to the state
            if (res.statusText === 'OK') {
                setUsers(res.data)
                setSearchResult(res.data)
            }

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // searching user
    const handleSearchChange = (e) => {
        // take a search query
        const query = e.target.value;

        // Filtering users and updating searchResult
        const filteredUser = users.filter((singleUser) => 
            // first, we get single user
            // change it to lowercase
            // 'test' - Typed value (query)
            singleUser.firstname.toLowerCase().includes(query.toLowerCase()) ||
            singleUser.lastname.toLowerCase().includes(query.toLowerCase())
        )

   
        // set as search result
        setSearchResult(filteredUser)

    }

    return (
        <>
            <div className='container'>
                <div className='mt-3'>
                    <h3>Searching!</h3>
                    <input onChange={handleSearchChange} type="text" className='form-control' placeholder='Search any products ...' />
                </div>

                <hr />
                <h5><i><u>Search Result:</u></i></h5>
                {
                    searchresult.length > 0 ? (
                        searchresult.map((user) => (
                            <div key={user.id} className='card mt-2'>
                                <div className='card-body'>
                                    <div className='d-flex'>
                                        <FaUserCircle size={'30px'} />
                                        <div className='ms-3'>
                                            <h5 className='card-title'>{user.firstname} {user.lastname}</h5>
                                            <p><u>{user.email}</u></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Users found!</p>
                    )
                }


            </div>
        </>
    )
}

export default Search



