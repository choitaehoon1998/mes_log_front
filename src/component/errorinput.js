import React, { useState } from "react";

function ErrorInput(props) {
  const { errorData } = props;
  const [error, setError] = useState("");
  const handleChange = ({ target: { value } }) => setError(value);
  return (
    <>
      <input
        type="text"
        name="error"
        value={errorData}
        onChange={handleChange}
        className="form-control1"
        readonly
        onfocus="this.blur();"
      />
    </>
  );
}

export default ErrorInput;
