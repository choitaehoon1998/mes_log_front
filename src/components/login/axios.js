import axios from "axios";
import { API_URL } from "../../constant/constant";

axios.defaults.withCredentials = true;
export const request = (method, url, data) => {
    return axios({
        method,
        url: API_URL + "/login",
        data,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};