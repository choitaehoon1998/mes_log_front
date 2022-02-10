import React from "react";

function ErrorInput(props) {
  const { errorData } = props;

  return (
    <>
      <input
        type="text"
        name="error"
        value={errorData}
        className="form-control1"
        readonly
        // onfocus="this.blur();"
      />
    </>
  );
}

export default ErrorInput;
