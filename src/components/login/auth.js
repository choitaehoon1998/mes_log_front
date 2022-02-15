import axios from "axios";
import { API_URL } from "../../constant/constant";

export const localLogin = ({email, password}) => axios.post(API_URL + "/login" , (email, password));