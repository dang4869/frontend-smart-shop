import axios from "./customAxios";

const getPhone = ()=>{
    return axios.get('/home/phone');
}
const getLaptop = ()=>{
    return axios.get('/home/laptop');
}
const getNewProduct = ()=>{
    return axios.get('/home/new');
}
const getOutstanding = ()=>{
    return axios.get('/home/outstanding');
}

export {getPhone, getLaptop, getNewProduct, getOutstanding}