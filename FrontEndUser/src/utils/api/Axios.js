import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:8082/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${Cookies.get("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
let refresh = false;
instance.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await instance.post("auth/refreshtoken", {
        refreshToken: Cookies.get("refreshToken"),
      });

      if (response.data.status) {
        console.log("rep", response.data.status);
        console.log("first", refresh);
        Cookies.set("token", response.data["accessToken"], {
          expires: 7,
          path: "/",
        });
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${Cookies.get("token")}`;
        console.log("token", Cookies.get("token"));
        return instance(error.config);
      }
    }
    refresh = false;
    return error;
  }
);

export default instance;
