import axios from "./customAxios";

const getAllSearchProduct = (page: number, keyword: string) => {
  return axios.get(`/products?keyword=${keyword}&page=${page}`);
};
const createProduct = (data: any) => {
  return axios.post(`/products/add`, data);
};
const updateProduct = (data: any, id: any) => {
  return axios.post(`/products/update/${id}`, data);
};
const deleteProduct = (id: any) => {
  return axios.delete(`/products/delete/${id}`);
};
const getProductToSlug = (slug: any) => {
  return axios.get(`/product/${slug}`);
};
const getProductListCategory = (slug: any) => {
 return axios.get(`/productCategoryList/${slug}`);
}
export {
  getAllSearchProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductToSlug,
  getProductListCategory
};
