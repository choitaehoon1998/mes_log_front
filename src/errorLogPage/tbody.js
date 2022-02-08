import React from "react";
import { Link } from "react-router-dom";

export default function Tbody(props) {
    return(
        <tbody className="h25 ">            
            <tr>
                <td className="pl-10 br-1 verMid">{props.no}</td>
                <td className="w-30p br-1 verMid">{props.id}</td>
                <td className="br-1 verMid">{props.name}</td>
                <td className="br-1 verMid">{props.date}</td>
                <td className="br-1 textMid verMid "><Link to={props.link} >보기</Link></td>
            </tr>
        </tbody>
    );
}