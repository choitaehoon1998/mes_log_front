import React, { useState } from "react";

export default function UserName() {
  const [memName, setMemName] = useState("");

  const handleChange = ({ target: { value } }) => setMemName(value);
  return (
    <>
      <input
        type="text"
        name="name"
        value={memName}
        onChange={handleChange}
        className="member-input"
      />
    </>
  );
}
