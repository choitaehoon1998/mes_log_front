import React, { useState } from "react";
import "../components/css/login.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../components/login/userAction"

function LoginPage(props){

    

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {
            email: Email,
            password: Password,
        };
        
        dispatch(loginUser(body))
            .then((res) => {
            if(res.payload.loginSuccess){
                props.history.push('/');
            }else{
                alert(res.payload.message);
            }
        })
        .catch((err) => {
            console.log(err);
        })
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