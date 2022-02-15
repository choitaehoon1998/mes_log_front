import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../modules/changer";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.changer);

  return (
    <button
      onClick={() => {
        dispatch(logout());
      }}
    >
      {" "}
      로그아웃
    </button>
  );
}
