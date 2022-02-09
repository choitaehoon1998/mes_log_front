import React from "react";
import { Link } from "react-router-dom";
import ErrorLogModal from "../errorLogPage/errorLogmodal";

export default function Tbody(props) {
  return (
    <tbody className="h25 ">
      <tr>
        <td className="br-1 verMid textMid">{props.companyCode}</td>
        <td className="br-1 verMid textMid">{props.name}</td>
        <td className="br-1 verMid textMid">{props.date}</td>
        <td className="br-1 verMid textMid">{props.time}</td>
        <td className="br-1 textMid verMid ">
          <ErrorLogModal state={{ id: props.link }} />
        </td>
      </tr>
    </tbody>
  );
}
