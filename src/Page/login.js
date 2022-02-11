import React, { useState } from "react";
import "../components/css/login.css"

function LoginPage(props) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const onUserIdHandler = (event) => {
        setUserId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    return(
        <>
        <div className="d">
            <form className="f" onSubmit>
                
                <header className="h">
                    <div className="h-inner">로그인</div>
                </header>
                
                <input className="mt-10" type={"text"} placeholder=" ID" value={userId} onChange={onUserIdHandler} />
                <input className="mt-10" type={"password"} placeholder=" Password" value={password} onChange={onPasswordHandler} />
                <button className="b mt-20" type={"submit"}>Login</button>

            </form>
        </div>
        </>
    );
}
export default LoginPage;