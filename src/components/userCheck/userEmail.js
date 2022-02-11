import React, { useState } from "react";

export default function UserEmail() {
  const [memEmail, setmemEmail] = useState("");

  const handleChange = ({ target: { value } }) => setmemEmail(value);
  return (
    <>
      <input
        type="email"
        name="email"
        value={memEmail}
        onChange={handleChange}
        className="member-input"
      />
    </>
  );
}
