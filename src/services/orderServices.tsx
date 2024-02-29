import axios from "./customAxios";

const addOrder = (data: any) => {
  return axios.post("/order/addOrder", data);
};
const addOrderDetail = (data: any) => {
  return axios.post("/order/addDetailOrder", data);
};
const getAllOrders = (page: any) => {
  return axios.get(`/orders?page=${page}`);
};
const getDetailOrder = (id: any) => {
  return axios.get(`/orders/detail/${id}`);
}
const updateOrderSatus = (id: any, data:any) => {
   return axios.put(`/orders/update/${id}`, data);
}
const deleteOrder = (id: any) => {
  return axios.delete(`/orders/delete/${id}`)
}
export { addOrder, addOrderDetail, getAllOrders, getDetailOrder, updateOrderSatus, deleteOrder };
