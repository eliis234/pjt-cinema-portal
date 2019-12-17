import axios from "axios";
const domain = "http://movie0706.cybersoft.edu.vn/api";
export let config = {};

// set Authorization token
export const setAccessToken = auth_token => {
  config = {
    headers: { 
      Authorization: 'Bearer '.concat(auth_token)
    },
    'Content-Type': 'application/json'
  };
};

export const deleted = (url, data) => {
  return axios.delete(`${domain}${url}?MaPhim=${data}`, config);
};

export const get = url => {
  return axios.get(domain + url);
};

export const post = (url, data) => {
  console.log(config)
  return axios.post(domain + url, data, config);
};

export const put = (url, data) => {
  return axios.put(domain + url, data, config);
};

const methodGetApi = {
  get,
  post,
  put
};
export default methodGetApi;
