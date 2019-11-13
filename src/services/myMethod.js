import axios from 'axios'
const domain = 'http://movie0706.cybersoft.edu.vn/api'

export const get = (url) => {
  return axios.get(domain + url);
}

export const post = (url, data) => {
  return axios.post(domain + url, data);
}

const methodGetApi = {
  get, post
}
export default methodGetApi