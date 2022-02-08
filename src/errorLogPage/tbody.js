import React from "react";
import { Link } from "react-router-dom";

export default function Tbody(props) {
  return (
    <tbody className="h25 ">
      <tr>
        <td className="br-1 verMid textMid">{props.companyCode}</td>
        <td className="br-1 verMid textMid">{props.name}</td>
        <td className="br-1 verMid textMid">{props.date}</td>
        <td className="br-1 verMid textMid">{props.time}</td>
        <td className="br-1 textMid verMid ">
          <Link to="/detail" state={{ id: props.link }}>
            보기
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
