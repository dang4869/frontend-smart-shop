import axios from "./customAxios";

const getAllCategory = () => {
  return axios.get("/categoryproducts");
};
const createCategory = (data: any) => {
  return axios.post("/categoryproducts/add", data);
};
const deleteCategory = (id: string) => {
  return axios.delete(`/categoryproducts/delete/${id}`);
};
const updateCategory = (data: any, id: string) => {
  return axios.put(`/categoryproducts/update/${id}`, data)
}

export { getAllCategory, createCategory, deleteCategory, updateCategory };
