import React, { useState } from "react";

export default function UserPassWord() {
  const [memPassword, setmemPassword] = useState("");

  const handleChange = ({ target: { value } }) => setmemPassword(value);
  return (
    <>
      <input
        type="text"
        name="password"
        value={memPassword}
        onChange={handleChange}
        className="member-input"
      />
    </>
  );
}
