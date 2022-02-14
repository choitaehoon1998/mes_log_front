import axios from "axios";
import React, { useState } from "react";
import "../components/css/login.css";
import { API_URL } from "../constant/constant"

function LoginPage(props){
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

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
        };
        axios
        .post(API_URL + "/login", body)
        .then((res) => console.log(res));
    };

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