import { API_URL } from "../../constant/constant";
import {LOGIN_USER} from "./types";
import { request } from "./axios";


export function loginUser(dataToSubmit){
    const data = request("post", API_URL + "/login", dataToSubmit);
    return {
        type: LOGIN_USER,
        payload: data,
    };
}