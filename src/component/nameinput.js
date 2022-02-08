import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  const handleChange = ({ target: { value } }) => setName(value);
  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className="form-control1"
      />
    </>
  );
}

export default NameInput;
