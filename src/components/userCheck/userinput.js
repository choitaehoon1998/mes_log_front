import React from "react";

export default function UserInput(props) {
  return (
    <>
      <input
        type="text"
        name="user_info"
        value={props.value}
        disabled={props.disalbed}
        onChange={(e) => props.handleChange(e.target.value)}
      />
    </>
  );
}
