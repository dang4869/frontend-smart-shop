import axios from "./customAxios";

const getAllSearchUsers = (page: number, keyword:string) =>{
    return axios.get(`/users?keyword=${keyword}&page=${page}`)
}
const createUser = (data: any) =>{
    return axios.post(`/users/add`,data)
}
const updateUser = (id: string, data: any) =>{
    return axios.put(`/users/update/${id}`,data)
}
const deleteUser = (id: string) =>{
    return axios.delete(`/users/delete/${id}`)
}

export {getAllSearchUsers, createUser, updateUser, deleteUser}