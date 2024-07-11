import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers :{
        "Content-Type": "application/json"
    }
})

// making our first api POST /users | Register
export const registerApi = (data) => Api.post("/users", data)

// Login API
export const loginApi = (email) => Api.get(`/users?email=${email}`)

// fetch user api
export const fetchUsers = () => Api.get('/users')

// update user api
export const updateUser = (id,data) => Api.put(`/users/${id}`, data)

// delete
export const deleteUser = (id) => Api.delete(`/users/${id}`)



// Complete URL : http://localhost:5000/users