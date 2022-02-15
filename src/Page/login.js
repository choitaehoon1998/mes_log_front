import axios from "axios";
import React, { useState } from "react";
import "../components/css/login.css";
import { API_URL } from "../constant/constant";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../modules/changer";

function LoginPage(props) {
  const status = useSelector((state) => state.changer);
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };
    axios
      .post(API_URL + "/login", body)
      .then((response) => {
        window.localStorage.setItem("accessToken", response.data.accessToken);
        window.localStorage.setItem("refreshToken", response.data.refreshToken);
      })
      .then(() => {
        dispatch(login());
      })
      .catch((e) => {
        dispatch(logout());
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
      });
  };

  return (
    <>
      <div className="d">
        <form className="f" onSubmit={onSubmitHandler}>
          <header className="h">
            <div className="h-inner">로그인</div>
          </header>

          <input
            className="mt-10"
            type={"text"}
            placeholder=" ID"
            onChange={onEmailHandler}
          />
          <input
            className="mt-10"
            type={"password"}
            placeholder=" Password"
            onChange={onPasswordHandler}
          />
          <button className="b mt-20" type={"submit"}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
