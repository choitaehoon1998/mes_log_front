import React from "react";

export default function MemberListTbody(props) {
  return (
    <tbody className="h25 ">
      <tr>
        <td className="verMid textMid">{props.name}</td>
        <td className="verMid textMid">{props.email}</td>
        <td className="verMid textMid">{props.approved ? "○" : "X"}</td>
      </tr>
    </tbody>
  );
}
