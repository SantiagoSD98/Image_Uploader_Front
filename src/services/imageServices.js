import axios from "../axiosConfig";

export const defaultService = () => axios.get('/default');

export const sendImage = (file) => {
  const headers = { "Content-Type": "multipart/form-data" };
  const bodyForm = new FormData();
  bodyForm.append('file', file);
  const config = {
    method: "post",
    url: '/images/imageUpload',
    data: bodyForm,
    headers: headers,
  };
  return axios(config);
};