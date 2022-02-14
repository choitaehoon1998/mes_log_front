import axios from "axios";
import React, { useState } from "react";
import "../components/css/login.css";
import { API_URL } from "../constant/constant";


function LoginPage(props){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [data, setData] = useState("");
    const [token, setToken] = useState("");

    const onEmailHandler = (e) => {
        e.preventDefault();
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(Email);
        console.log(Password);

        let body = {
            email: Email,
            password: Password,
        }
        axios.post(API_URL+"/login", body)
        .then(response => { 
            setData(response.data);
            setToken(response.data.accessToken)
        })
    };
    const accessToken = { accessToken: token};
    if(data===""){
        console.log("null")
    }else{
        console.log("ture")
        window.localStorage.setItem("token" , JSON.stringify(accessToken));
    }
    const aa = window.localStorage.getItem("token");
    if(aa===""){
        console.log("null")
    }else{
        console.log(aa);
    }

    return(
        <>
        <div className="d">
            <form className="f" onSubmit={onSubmitHandler}>
                
                <header className="h">
                    <div className="h-inner">로그인</div>
                </header>
                
                <input className="mt-10" type={"text"} placeholder=" ID" onChange={onEmailHandler} />
                <input className="mt-10" type={"password"} placeholder=" Password" onChange={onPasswordHandler} />
                <button className="b mt-20" type={"submit"}>Login</button>

            </form>
        </div>
        
        </>
    );
}
export default LoginPage;