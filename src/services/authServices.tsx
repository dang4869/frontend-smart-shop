import axios from "./customAxios";

const loginUser = (data: any) => {
  return axios.post(`/auth/login`, data);
};

const getCurrentUserProfile = () => {
  return axios.get(`/auth/user-profile`);
};

const registerUser = (data: any) => {
  return axios.post(`/auth/register`, data);
};

const changePassword = (data: any) => {
  return axios.post(`/auth/change-pass`, data);
};

const forgotPassword = (data: any) => {
  return axios.post(`/auth/reset-password`, data);
};

const resetPassword = (token: string, data: any) => {
  return axios.put(`/auth/reset-password/${token}`, data);
};

export {
  loginUser,
  getCurrentUserProfile,
  registerUser,
  changePassword,
  forgotPassword,
  resetPassword
};
