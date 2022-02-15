import { API_URL } from "../../constant/constant";
import axios from "axios";
import {LOGIN_USER} from "./types";


export function loginUser(dataToSubmit){
    const data = axios.post(API_URL + "/login", dataToSubmit)
        .then(response => response.data)
        
    return {
        type: LOGIN_USER,
        payload: data,
    };
}