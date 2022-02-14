import React from "react";

export default function UserInput(props) {
  return (
    <>
      <input
        type="text"
        name="user_info"
        value=""
        onChange={(e) => props.handleChange(e.target.value)}
      />
    </>
  );
}
