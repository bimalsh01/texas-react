// import React, { useEffect, useState } from "react";
// import { deleteUser, fetchUsers } from "../../api/Api";
// import { useDispatch, useSelector } from "react-redux";
// import EditUserModal from "../../components/EditUserModal";

// const Homepage = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.users.users); // List of users, Array

//     useEffect(() => {
//         fetchUsers()
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch(); // Adding user to Redux
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [dispatch]);

//     const [selectedUser, setSelectedUser] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);


//     const handleOpenModal = (user) => {
//         setSelectedUser(user);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedUser(null);
//     };

//     const handleDelete = (id) => {
//         const confirm = window.confirm("Are you sure you want to delete?");
//         if (!confirm) {
//             return;
//         }

//         deleteUser(id)
//             .then((res) => {
//                 if (res.statusText === "OK") {
//                     alert("User Deleted!");
//                     window.location.reload();
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//                 alert("Server Error");
//             });
//     };

//     // Sorting the users
//     // ...users : Copy of users, .sort (take users a=ram, b=shyam)
    


    
    

//     return (
//         <>
//             <table className="table">
//                 <thead className="table-dark">
//                     <tr>
//                         <th>ID</th>
//                         <th >
//                             Firstname 
//                         </th>
//                         <th>Lastname</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((singleUser) => (
//                         <tr key={singleUser.id}>
//                             <td>{singleUser.id}</td>
//                             <td>{singleUser.firstname}</td>
//                             <td>{singleUser.lastname}</td>
//                             <td>{singleUser.email}</td>
//                             <td>
//                                 <div className="btn-group">
//                                     <button onClick={() => handleOpenModal(singleUser)} className="btn btn-success">
//                                         Edit
//                                     </button>
//                                     <button className="btn btn-danger" onClick={() => handleDelete(singleUser.id)}>
//                                         Delete
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {isModalOpen && (
//                 <EditUserModal selectedUser={selectedUser} onClose={handleCloseModal} />
//             )}
//         </>
//     );
// };

// export default Homepage;
