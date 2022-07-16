import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
  },
})


const get = (url) => {
  return axiosClient.get(url);
}
export const getUserInfo = (url) => {
  return axiosClient.get(url);
}
export const postUserInfo = (url, data) => {
  return axiosClient.post(url, data);
}

const post = (url, data) => {
  return axiosClient.post(url, data);
}

const put = (url, data) => {
  return axiosClient.put(url, data);
}

const patch = (url, data) => {
  return axiosClient.patch(url, data);
}

const del = (url) => {
  return axiosClient.delete(url);
}

export { get, post, put, patch, del }
export default axiosClient