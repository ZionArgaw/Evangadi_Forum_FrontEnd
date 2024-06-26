import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5300/api",
  baseURL:"https://evangadi-forum-backend-li4t.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
