// First: import - React
import React, { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";
import EditUserModal from "../../components/EditUserModal";

// Make a function (Filename)
const Homepage = () => {

    // Make a dispatch
    const dispatch = useDispatch()

    // Selector (Select from storage) - List of users
    const users = useSelector((state) => state.users.users) // list of users, Array

    // automatic user fetch (useEffect)
    // [] is dependency list, when should it run
    useEffect(() => {

        // Fetch all users
        fetchUsers().then((res) => {
            console.log(res.data)

            // adding user to redux
            dispatch(addUser(res.data))


        }).catch((error) => {
            console.log(error)
        })

    }, [])

    // For editing users
    const [selectedUser, setSelectedUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Function for open and close
    const handleOpenModal = (user) => {
        setSelectedUser(user)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

    // delete user
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure want to delete?")
        if(!confirm){
            return;
        }

        // delete user
        deleteUser(id).then((res)=>{
            if(res.statusText === 'OK'){
                alert('User Deleted!')
                window.location.reload()
            }
        }).catch((error) => {
            console.log(error)
            alert('Server Error')
        })
    }


    return (
        <>
            {/* table */}

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        users.map((singleUser) => (
                            <tr>
                                <td>{singleUser.id}</td>
                                <td>{singleUser.firstname}</td>
                                <td>{singleUser.lastname}</td>
                                <td>{singleUser.email}</td>
                                <td>
                                    <div className="btn-group">
                                        <button onClick={()=> handleOpenModal(singleUser)} className="btn btn-success">Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(singleUser.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>

            {/* if user click edit, then only show modal */}

            {
                isModalOpen && 
                <EditUserModal
                    selectedUser={selectedUser}
                    onClose={handleCloseModal}
                
                />
            }

        </>
    )
}

// Export
export default Homepage;

// mapping [{user1},{user2}]
// index: 0, 1, 2, 3, 4


// Logic
// 1. Fetch user information
// 2. Automatic DONE
// 3. Trigger redux storage (addUser)
// 4. Storage has data

// 5. Fetch from storage
// 6. Display in UI


// https://onshare.net/code/V4

// Logic for edit data
// Data = Table (Row - Button - Edit)
// Select that specific user
// Open the popup modal, with that selected data
// Fill the modal